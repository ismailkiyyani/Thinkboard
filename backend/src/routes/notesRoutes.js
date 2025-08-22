import express from "express";
import { getAllNotes, getNoteById, createNotes, updateNotes, deleteNotes } from '../controllers/notesController.js';

const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getNoteById);

router.post("/", createNotes);
router.put("/:id", updateNotes);
router.delete("/:id", deleteNotes);



export default router;
