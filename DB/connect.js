const mongoose = require("mongoose");
const uri = process.env.MONGO_URI;



const connectDB = async()=>{
    try {
        const res = await mongoose.connect(`${uri}`);
        if(!res) {
            return
        }
        console.log("DB CONNECTED");
    } catch (error) {
        console.log("Failed to connect with database :",error);
    }
    

}

connectDB();

module.exports = connectDB;