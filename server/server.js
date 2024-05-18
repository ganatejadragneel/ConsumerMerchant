const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost/myapp');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  userType: String,
});

const User = mongoose.model('User', userSchema);

app.post('/api/register', async (req, res) => {
  try {
    const { username, email, password, userType } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      username,
      email,
      password: hashedPassword,
      userType,
    });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ userId: user._id }, 'secretkey');
      res.json({ token, userType: user.userType });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
});

app.listen(5001, () => {
  console.log('Server is running on port 5001');
});

const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (token) {
    jwt.verify(token, 'secretkey', (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: 'Invalid token' });
      }
      req.userId = decoded.userId;
      next();
    });
  } else {
    res.status(401).json({ error: 'No token provided' });
  }
};

app.get('/api/merchant', verifyToken, (req, res) => {
  res.json({ message: 'Welcome to the merchant home page' });
});

app.get('/api/consumer', verifyToken, (req, res) => {
  res.json({ message: 'Welcome to the consumer home page' });
});