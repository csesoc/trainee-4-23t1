import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../schemas/user.js';

// Register
const registerUser = async (req, res) => {
  const { username, email, password, profileImgUrl } = req.body;
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);
  
  const userMatches = await User.find({ username: username});
  if (username.length < 3 || username.length > 25) {
    res.status(400).json({ error: 'Username must be between 3 and 25 characters long, inclusive.' });
    return;
  } else if (/^[a-zA-Z0-9!@\$\^\&*\)\(._-]+$/g.test(username) !== true) {
    res.status(400).json({ error: 'Username contains an invalid character.' });
    return;
  } else if (userMatches.length !== 0) {
    res.status(400).json({ error: 'Username is already taken.' });
    return;
  }
  
  if (password.length < 3) {
    res.status(400).json({ error: 'Password must be at least 3 characters long.' });
    return;
  }
  if (username)

  try {
    const user = await User.create({
      username,
      email,
      password: passwordHash,
      profileImgUrl,
    });
    User.create

    res.status(200).json({
      uId: user._id,
      username: user.username,
      email: user.email,
      profileImgUrl: user.profileImgUrl,
      token: generateToken(user._id.toString())
    });
  } catch (err) {
    res.status(400).json(err);
  }
};


// Login
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      uId: user._id,
      username: user.username,
      email: user.email,
      profileImgUrl: user.profileImgUrl,
      token: generateToken(user._id.toString()),
    });
  } else {
    res.status(400).json({ error: 'Could not login.' });
  }
};


// Search users (for search bar)
const searchUsers = async (req, res) => {
  const searchStr = req.query.searchStr;
  try {
    const userMatches = await User.find({username : new RegExp(searchStr, 'i')});
    const usernames = userMatches.map(user => user.username);
    res.status(200).json(usernames);
  } catch (err) {
    res.status(200).json([]);
  }
};


// Update user details
const updateUser = async (req, res) => {
  const { username, profileImgUrl } = req.body;
  const user = req.user;
  
  const userMatches = await User.find({ username: username});
  if (username.length < 3 || username.length > 25) {
    res.status(400).json({ error: 'Username must be between 3 and 25 characters long, inclusive.' });
    return;
  } else if (/^[a-zA-Z0-9!@\$\^\&*\)\(._-]+$/g.test(username) !== true) {
    res.status(400).json({ error: 'Username contains an invalid character.' });
    return;
  } else if (userMatches.length !== 0 && username !== user.username) {
    res.status(400).json({ error: 'Username is already taken.' });
    return;
  }

  try {
    const userDoc = await User.findByIdAndUpdate(user._id, { username: username, profileImgUrl: profileImgUrl });
    if (userDoc) {
      res.status(200).json({ 
        username: userDoc.username, 
        profileImgUrl: userDoc.profileImgUrl 
      });
    } else {
      res.status(400).json({ error: 'Could not update user details.' });
    }
  } catch (err) {
    res.status(400).json(err);
  }
};


// Fetch details of user (for profile page)
const detailsUser = async (req, res) => {
  const user = req.user;
  try {
    const userDoc = await User.findById(user._id);
    if (userDoc) {
      res.status(200).json(userDoc);
    } else {
      res.status(400).json({ error: 'Could not get user details' });
    }
  } catch (err) {
    res.status(400).json(err);
  }
};


// Token logic
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });
};

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) {
    res.status(401).json({ error: 'No token' });
    return;
  }

  jwt.verify(
    token,
    process.env.JWT_SECRET,
    async (err, decoded) => {
      if (err) {
        res.status(403).json({ error: 'Invalid token' });
        return;
      }

      const user = await User.findById(decoded.id);
      if (!user) {
        res.status(400).json({ error: 'Invalid id' });
        return;
      }
      req.user = user;

      next();
    }
  );
}

export { registerUser, loginUser, searchUsers, updateUser, detailsUser, authenticateToken };