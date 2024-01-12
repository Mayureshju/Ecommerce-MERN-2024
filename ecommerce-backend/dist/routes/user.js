import { adminOnly } from './../middlewares/auth.js';
import express from "express";
const router = express.Router();
import { getAllUsers, newUser, getUser, deleteUser } from "../controllers/user.js";
router.post('/new', newUser);
router.get('/all', adminOnly, getAllUsers);
router.get('/:id', getUser);
router.delete('/:id', adminOnly, deleteUser);
export default router;
