import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
    {
        userName: { type: String, required: true },
        userImage: { type: String },
        rating: { type: Number, required: true },
        comment: { type: String, required: true },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const moviesSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        name: {
            type: String,
            require: true
        },
        desc: {
            type: String,
            require: true
        },
        titleImage: {
            type: String,
            require: true
        },
        image: {
            type: String,
            require: true
        },
        category: {
            type: String,
            require: true
        },
        language: {
            type: String,
            require: true
        },
        year: {
            type: Number,
            require: true
        },
        time: {
            type: Number,
            require: true
        },
        video: {
            type: String,
            // require: true
        },
        rate: {
            type: Number,
            require: true,
            default: 0
        },
        numberOfReviews: {
            type: Number,
            require: true,
            default: 0
        },
        reviews: [reviewSchema],
        casts: [
            {
                name: {type: String, required: true},
                image: {type: String, required: true},
            }
        ]
    }, {
        timestamps: true,
    }  
);

export default mongoose.model("Movies", moviesSchema);