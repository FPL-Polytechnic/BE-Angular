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
export const remove = async (req, res) => {
    try {
        const cate = await Category.findOneAndDelete({ _id: req.params.id });
        return res.json({
            message: "Xóa danh mục thành công",
            cate,
        });
    } catch (error) {
        return res.status(404).json({
            message: error.message,
        });
    }
};
export const getAll = async (req, res) => {
    try {
        const data = await Category.find().populate("products");

        if (data.length == 0) {
            return res.json({
                message: "Không có sản phẩm nào",
            });
        }
        return res.json(data);
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })

    }
};
export const updateCategory = async (req, res) => {
    try {
        const id=req.params.id
        const categoryUpdate=await Category.findByIdAndUpdate(id,req.body,{
            new:true
        })
        if(!categoryUpdate){
            return res.status(400).json({
                message:"Cập nhập sản phẩm thất bại"
            })
        }
        return res.status(200).json({
            message:"Cập nhập sản phẩm thành công",
            categoryUpdate
        })
    } 
    catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}