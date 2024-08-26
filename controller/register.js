const bcrypt = require('bcryptjs');
const User = require('../models/user');
const Student = require('../models/studentDetails');
const { hashGenerator } = require('../counter/hashing');


const registerUser = async (req, res) => {
    const { username, email, password, role, mobile, college, department } = req.body;

    try {
        const hashedPassword = await hashGenerator(password);

        let existingUser = await User.findOne({ email });
        if (existingUser) {
           return res.status(400).json({ message: "User already exist!" });
        }
        const newUser = new User({
            email, password: hashedPassword,
            role
        })

        if (!role || role === 'student') {
            const newStudent = new Student({
                username, 
                mobile, 
                college, 
                department, 
                userDetails: newUser._id,
            })

            await newStudent.save();
            newUser.student = newStudent._id;
        }

        await newUser.save();
        res.status(201).json({message:"user registered successfully",user:newUser})
    } catch (error) {
        console.error("Registration error:",error);
        res.status(500).json({message:"server error"});
    }
};

module.exports = {registerUser};