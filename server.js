import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import userRouter from './Routes/UserRouter.js';
import moviesRouter from './Routes/MoviesRouter.js';
import categoriesRouter from './Routes/CategoriesRouter.js';

import { errorHandler } from './Middlewares/errorMiddleware.js';
import UploadRouter from './Controllers/UploadFile.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// connect DB
connectDB();

// Main route
app.get('/', (req, res) => {
    res.send('API is running...');
});



// Add router to your app
// app.use('/api', router);

// other router
app.use("/api/users", userRouter);
app.use("/api/movies", moviesRouter);
app.use("/api/categories", categoriesRouter);
app.use("/api/upload", UploadRouter);

// error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`);
})