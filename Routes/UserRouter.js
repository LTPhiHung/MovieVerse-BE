import express from "express";
// import { 
//     addLikedMovie,
//     changeUserPassword,
//     deleteLikedMovies,
//     deleteUser,
//     deleteUserProfile,
//     getLikedMovies,
//     getUsers,
//     loginUser,
//     registerUser,
//     updateUserProfile 
// } from "../Controllers/UserController.js";
import * as userController from "../Controllers/UserController.js";
import { admin, protect } from "../Middlewares/Auth.js";

const router = express.Router();

// ********* PUBLIC ROUTES *********
router.post("/", userController.registerUser);
router.post("/login", userController.loginUser);

// ********* PRIVATE ROUTES *********
router.put("/", protect, userController.updateUserProfile);
router.delete("/", protect, userController.deleteUserProfile);
router.put("/password", protect, userController.changeUserPassword);
router.get("/favorites", protect, userController.getLikedMovies);
router.post("/favorites", protect, userController.addLikedMovie);
router.delete("/favorites", protect, userController.deleteLikedMovies);

// ********* ADMIN ROUTES *********
router.get("/", protect, admin, userController.getUsers);
router.delete("/:id", protect, admin, userController.deleteUser);

router.get('/download-video', async (req, res) => {
    const { url } = req.query;

    try {
        const { data } = await axios({
            url,
            method: 'GET',
            responseType: 'blob',
            // ...other configurations like headers, etc.
        });

        // Send the data back to the frontend
        // res.setHeader('Content-Disposition', `attachment`);
        res.send(data);
    } catch (error) {
        console.error('Error downloading video in backend', error);
        res.status(500).send('Failed to download video');
    }
});

export default router;