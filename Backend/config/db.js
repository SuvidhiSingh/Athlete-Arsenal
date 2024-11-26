import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://suvidhi_4:987623416@cluster1.udzftim.mongodb.net/Athletes_Arsenal').then(()=>console.log("DB Connected"));
}

