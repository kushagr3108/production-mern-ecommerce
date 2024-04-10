import mongoose from "mongoose";
import colors from "colors"

const connectDB= async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Database is connected ${conn.connection.host}`.bgGreen.white);
    } catch(error)
    {
        console.log(`Error in server ${error}` .bgRed.white );
    }   
};

export default connectDB;


