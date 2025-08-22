import mongoose from "mongoose";


export const connectDB = async () => {
    try {
        console.log('##', process.env.MONGO_URI);
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("error connecting DB", error);
        process.exit(1); // Exit process with failure
    }
}