import User from "../models/user";
import { signupSchema,signInSchema } from "../schemas/auth";
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
export const signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const { error } = signInSchema.validate(req.body);
        if (error) {
            return res.status(400).json({
                message: error.details.map((err) => err.message),
            });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: "Email không tồn tại",
            });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                message: "Mật khẩu không đúng hãy nhập lại",
            });
        }
        user.password = undefined;
        return res.status(200).json({
            message: "Đăng nhập thành công",
            user,
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
};