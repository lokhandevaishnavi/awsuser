import express from "express"
import mongoose from "mongoose";
import morgan from "morgan";
import dotenv from "dotenv"
import cors from "cors"
import userRoutes from "./routes/user.js"




dotenv.config();
const app=express();
app.use(express.json());
app.use(morgan("common"));
app.use(cors());
app.use("/user",userRoutes)






/* MONGOOSE SETUP */
const PORT = process.env.PORT || 8000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    
  })
  .catch((error) => console.log(`${error} did not connect`));

