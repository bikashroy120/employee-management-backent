import mongoose from "mongoose";



const connectDB = async()=>{
    try {
        await mongoose.connect("mongodb+srv://admin:admin@cluster0.1zqbdv0.mongodb.net/").then(data=>{
            console.log(`Datebase connected with ${data.connection.host}`)

        })
    } catch (error) {
        console.log(error.message)
        setTimeout(connectDB,5000)
    }
}

export default connectDB