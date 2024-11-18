import mongoose from 'mongoose';
const { Schema } = mongoose;

const ReviewSchema = new Schema({
 gigId: {
    type:String,
    required:true,
    unique:true,
 },
 userId: {
    type:String,
    required:true,
    unique:true,
 },
 star: {
    type:Number,
    default:0,
    required:true,
    enum:[1,2,3,4,5]
 },
 desc: {
    type:String,
    required:false,
    unique:true,
 },
 
 }, {
    timestamps:true
 

});

export default mongoose.model("Review",ReviewSchema);// in your db already exists a collection named users but not User