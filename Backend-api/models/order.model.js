import mongoose from 'mongoose';
const { Schema } = mongoose;

const OrderSchema = new Schema({
 gigId: {
    type:String,
    required:true,
    unique:true,
 },
 img: {
    type:String,
    required:false,

 },
 title: {
    type:String,
    required:true,
 },
 img: {
    type:String,
    required:false,
 },
 price: {
    type:Number,
    required:true,
 },
 sellerId: {
    type:String,
    required:false,
 },
 buyerId: {
    type:String,
    required:false,
 },
 isCompleted: {
    type:Boolean,
    default:false,
 },
 payment_Intent: {
    type:Boolean,
    default:false,
 },
 }, {
    timestamps:true
 

});

export default mongoose.model("Order",OrderSchema);