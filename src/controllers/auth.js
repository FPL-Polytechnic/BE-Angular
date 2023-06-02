import User from "../models/user";
import { signupSchema } from "../schemas/auth";
import bcrypt from "bcryptjs"
export const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const { error } = signupSchema.validate(req.body, {
            abortEarly: false
        })
        if (error) {
            const errors = error.details.map((err) => err.message);
            return res.status(400).json({
                message: errors,
            });
        }
        const userExits=await User.findOne({email:email})
        if(userExits){
            return res.status(400).json({
                message:"Email đã đươc đăng ký"
            })
        }
        const hashPassword =await bcrypt.hash(password,10)
        const user=await User.create({
            email,password:hashPassword,name
        })
        return res.status(200).json({
            message:"Đăng ký thành công",
            user
        })
    }
    catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}