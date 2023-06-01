import mongoose from "mongoose";

const categorySChema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    products: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Product",
        },
    ],
}, {
    versionKey: false,
    timestamps: true
});

export default mongoose.product("Category", categorySChema);