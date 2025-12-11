import mongoose, { mongo } from "mongoose";

const ProductSchema=new mongoose.Schema({
  email:{
    type: String,
    required: true,
  },
    name: {
      type: String,
      required: [true, "Product name is required"],
      // trim: true,
    },

    description: {
      type: String,
      required: [true, "Description is required"],
    },

    images: [
      {
        url: {
          type: String,
        //   required: true,
        },
        public_id: String, // if using Cloudinary
      },
    ],

    category: {
      type: String,
      required: true,
      // enum: ["Electronics", "Books", "Fashion", "Mobile", "Grocery", "Other"],
    },

    brand: {
      type: String,
      default: "Generic",
    },

    price: {
      type: Number,
      required: true,
    },

    discountPrice: {
      type: Number,
      default: 0,
    },

    stock: {
      type: Number,
      required: true,
      default: 0,
    },

    rating: {
      type: Number,
      default: 0,
      min: [0, "Rating cannot be less than 0"],
      max: [5, "Rating cannot be more than 5"],
    },

    reviews: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        name: { type: String },
        rating: { type: Number },
        comment: { type: String },
        createdAt: { type: Date, default: Date.now },
      },
    ],

    tags: {
      type: [String],
      default: [],
    },

    // Product Variants (like size, color)
    variants: [
      {
        size: { type: String },
        color: { type: String },
        additionalPrice: { type: Number, default: 0 },
        stock: { type: Number, default: 0 },
      },
    ],

    // Meta
    isFeatured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
)
const Product=mongoose.models.Product || mongoose.model("Product",ProductSchema);

export default Product;