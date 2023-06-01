import Joi from "joi";
import Category from "../models/category";

const categorySchema = Joi.object({
    name: Joi.string().required(),
})

export const createCategory = async (req, res) => {
    try {
        const body = req.body;
        const { error } = categorySchema.validate(body)
        if (error) {
            return res.json({
                message: error.details.map((item) => item.message)
            });
        }
        const data = await Category.create(body);
        if (data.length === 0) {
            return res.status(400).json({
                message: "Thêm danh mục thất bại"
            });
        }
        return res.status(200).json({
            message: " Thêm danh mục thành công!",
            data,
        })
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })

    }
};