import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from './config/db.js';
import dotenv from "dotenv";
import rateLimiter from './middleware/rateLimiter.js';

dotenv.config();

console.log("Environment Variables Loaded", process.env.MONGO_URI);
const port = process.env.PORT || 5001;

const app = express();


app.use(express.json()); // Middleware to parse JSON bodies
app.use(rateLimiter)


// app.use((req, res, next) => {  // Middleware to check url before response 
//     console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
//     next();
// });
app.use("/api/notes", notesRoutes);

connectDB().then(() => {
    app.listen(port, () => {
        console.log("Server is running on port ", port);
    });
}) 
//Zx5eacaGcbuOKWWC
//bkoppp6
//