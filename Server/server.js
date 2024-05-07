// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Signup = require('./models/Signup');
const bcrypt = require('bcryptjs'); // Use bcryptjs instead of bcrypt

const app = express();

// Middleware
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/joblet', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
  console.log('Connected to MongoDB');
});

// Route for handling signup data
app.post('/api/signup', async (req, res) => {
  try {
    const { email, username, password } = req.body;
    // Check if the username already exists
    const existingUser = await Signup.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }
    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create a new Signup document
    const newSignup = new Signup({
      email,
      username,
      password: hashedPassword
    });
    // Save the document to the database
    await newSignup.save();
    res.status(201).json({ message: 'Signup successful' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Signup failed' });
  }
});

// Route for handling login data
app.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    // Find the user in the database
    const user = await Signup.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
    // Compare the provided password with the hashed password stored in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
    // If the username and password are valid, return a success message
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Login failed' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
