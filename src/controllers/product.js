import Product from '../models/product';
import Joi from 'joi';

const productSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    description: Joi.string().required(),
    image: Joi.string().required(),
    color: Joi.string().required()

})


export const createProduct = async (req, res) => {
    try {
        const body = req.body;
        const { error } = productSchema.validate(body);
        if (error) {
            return res.json({
                message: error.details[0].message,
            })
        };
        const product = await Product.create(body);
        if (product.length === 0) {
            return res.status(400).json({
                message: "Thêm sản phẩm thất bại"
            })
        };
        return res.status(200).json({
            message: "Thêm sản phẩm thành công",
            product
        })
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
};