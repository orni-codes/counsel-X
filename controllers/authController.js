const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signup = async (req,res) => {
  try{

    const {name, surname, email, password} = req.body;

    const existingUser = await User.findOne({email});
    if(existingUser){
      return res.status(400).json({message:"User already exists"});
    }

    const hashedPassword = await bcrypt.hash(password,10);

    const user = new User({
      name,
      surname,
      email,
      password: hashedPassword
    });

    await user.save();

    res.json({message:"Signup successful"});

  }catch(err){
    res.status(500).json(err);
  }
};

exports.login = async (req,res) => {

  const {email,password} = req.body;

  const user = await User.findOne({email});

  if(!user){
    return res.status(400).json({message:"User not found"});
  }

  const isMatch = await bcrypt.compare(password,user.password);

  if(!isMatch){
    return res.status(400).json({message:"Invalid credentials"});
  }

  const token = jwt.sign(
    {id:user._id},
    process.env.JWT_SECRET,
    {expiresIn:"1d"}
  );

  res.json({token,user});
};