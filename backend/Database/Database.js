import mongoose from 'mongoose';

const connectDb=async()=>{
    try
    {
       await  mongoose.connect(process.env.MONGO_URL,{dbName:process.env.DB_NAME});
       console.log("Database successfully connected!");
    }
    catch(err)
    {
        console.log("Database Not connected!",err);
    }
}

export default connectDb;