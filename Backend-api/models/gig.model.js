import mongoose from 'mongoose';
const { Schema } = mongoose;

const GigSchema = new Schema({
    userId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    totalStars: {
        type: Number,
        default: 0,
    },
    starNumber: {
        type: Number,
        default: 0,
    },
    cat: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    cover: {
        type: String,
        required: true,
    },
    images: {
        type: [String],
    },
    shortTitle: {
        type: String,
        required: true,
    },
    shortDesc: { // Use shortDesc to maintain consistency
        type: String,
        required: true,
    },
    deliveryTime: {
        type: Number,
        required: true,
    },
    revisionNumber: {
        type: Number,
        required: true,
    },
    features: {
        type: [String],
    },
    sales: {
        type: Number,
        default: 0,
    },
}, {
    timestamps: true,
});

export default mongoose.model("Gig", GigSchema);
/*import mongoose from 'mongoose';
const { Schema } = mongoose;

const GigSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Use ObjectId for user references
        ref: "User", // Reference to the User model
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    totalStars: {
        type: Number,
        default: 0,
    },
    starNumber: {
        type: Number,
        default: 0,
    },
    cat: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    cover: {
        type: String,
        required: true,
    },
    images: {
        type: [String],
    },
    shortTitle: {
        type: String,
        required: true,
    },
    shortDesc: { // Use shortDesc to maintain consistency
        type: String,
        required: true,
    },
    deliveryTime: {
        type: Number,
        required: true,
    },
    revisionNumber: {
        type: Number,
        required: true,
    },
    features: {
        type: [String],
    },
    sales: {
        type: Number,
        default: 0,
    },
}, {
    timestamps: true,
});

// Export the Gig model
export default mongoose.model("Gig", GigSchema);*/

