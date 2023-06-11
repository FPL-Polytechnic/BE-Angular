import jwt from "jsonwebtoken"
import User from "../models/user"
const checkPermission = async (req, res,next) => {
    try {
        if (!req.headers.authorization) {
            return res.status(203).json({
                message: "Bạn chưa đăng nhập"
            })
        }
        const token = req.headers.authorization.split(" ")[1]
        const { id } = jwt.verify(token, "banThayDat")
        const user = await User.findById(id)
        if (user && user.role !== "admin") {
            return res.status(403).json({
                message: "Bạn không có quyền",
            });
        }
        next();
    }
    catch (error) {
        return res.status(203).json({
            message: error.message
        })
    }
}
export default checkPermission