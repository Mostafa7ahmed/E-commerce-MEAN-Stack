import mongoose from "mongoose";

const dbConnection = () => {
      mongoose.connect(process.env.DB!)
        .then(() => { console.log("Done DB") })
      .catch(err => console.error("connection error"));

}

export default dbConnection