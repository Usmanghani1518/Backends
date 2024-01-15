import mongoose from "mongoose";
import { Database } from "../constant";



const Databases = async ()=>{
try {
    const connectionInstance = await mongoose.connect(`
    ${process.env.DATABASE_URI}/${Database}`)
    console.log(`\n  MongoDB connected !! DB HOST: ${
        connectionInstance.connection.host}`);
} catch (error) {
    console.log("MongoDB connection Error" + error);
    process.exit(1)
}

}


export default Databases;