import Product from '../models/product';
import Joi from 'joi';
import Category from '../models/category';

const productSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    description: Joi.string().required(),
    image: Joi.string().required(),
    color: Joi.string().required(),
    categoryId: Joi.string().required()

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
        await Category.findByIdAndUpdate(product.categoryId, {
            $addToSet: {
                products: product,
            },
        });
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

export const getAll = async (req, res) => {
    const { _limit = 10, _sort = "createAt", _order = "asc", _page = 1 } = req.query;
    const options = {
        page: _page,
        limit: _limit,
        sort: {
            [_sort]: _order == "desc" ? -1 : 1,
        },
    };

    try {
        const data = await Product.paginate({}, options);
        if (data.length === 0) {
            return res.json({
                message: "Không có sản phẩm nào",
            });
        }
        return res.status(200).json({
            message: "Lấy tất cả sản phẩm thành công",
            data
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
};


export const getOneProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Product.findById(id).populate("categoryId", "-__v -updatedAt -createdAt");
        if (data.length === 0) {
            return res.status(200).json({
                message: "Không có sản phẩm"
            });
        }
        return res.status(200).json({
            message: "Lấy 1 sản phẩm thành công!",
            data
        })
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
};

export const remove = async (req, res) => {
    try {
        const id=req.params.id;
        const data = await Product.findByIdAndDelete(req.params.id);
        await Category.findByIdAndUpdate(data.categoryId,{
            $pull:{
                products:id
            }
        })
        return res.json({
            message: "Xóa sản phẩm thành công",
            data,
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
};

export const updateProduct = async (req, res) => {
    try {
        const id = req.params.id
        const data = await Product.findByIdAndUpdate(id, req.body, {
            new: true
        })
        if (!data) {
            return res.status(400).json({
                message: "Xóa sản phẩm thất bại"
            })
        }
        return res.status(200).json({
            message: "Xóa sản phẩm thành công",
            data
        })
    }
    catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}