import mongoose from "mongoose";

const Schema=mongoose.Schema;

const UserSchema=new Schema({
     username:{
        type:String
     },
     password:{
        type:String
     }

});
const User=mongoose.model('UserData',UserSchema);
export default User;