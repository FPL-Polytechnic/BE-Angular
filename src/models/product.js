import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    categoryId: {
        type: mongoose.Types.ObjectId,
        ref: "Category"
    }
}, {
    versionKey: false,
    timestamps: true
});

productSchema.plugin(mongoosePaginate);
export default mongoose.model("Product", productSchema);