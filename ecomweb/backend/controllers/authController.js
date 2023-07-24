import { comparePassword, hashPasssword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";

export const registrationController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    console.log(req.body)
    // ===validaton====
    if (!name) {
      return res.send({ message: "Name is required." });
    }
    if (!email) {
      return res.send({ message: "email is required." });
    }
    if (!password) {
      return res.send({ message: "Password  is required." });
    }
    if (!phone) {
      return res.send({ message: "Phone no is required." });
    }
    if (!address) {
      return res.send({ message: "Address is required." });
    }
    // === check  user ======
    const existingUser = await userModel.findOne({ email });
    // === existing  user ======
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "Already registered please login",
      });
    }

    // register user
    const hashedPassword = await hashPasssword(password);
    // save user
    const user = new userModel({
      name:name,
      email:email,
      phone:phone,
      address:address,
      password: hashedPassword,
    })
    const result = await user.save()
    console.log(result)

    res.status(201).send({
      success: true,
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in registration",
      error,
    });
  }
};

//===== post login =====
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    // validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "invalid email or password",
      });
    }
    //check user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "email is not registered",
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "invalid password",
      });
    }
    //  === token ===
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "2d",
    });

    res.status(200).send({
      success: true,
      message: "login successfully",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        role:user.role
      },
      token,
    });
  } catch (error) {
    console.log("error");
    res.status(500).send({
      success: false,
      message: "error in login",
      error,
    });
  }
};

// test controller
export const testController = (req, res) => {
  console.log("protected route");
  res.send({ message: "protected route" });
};
