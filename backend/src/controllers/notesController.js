import Note from '../models/Note.js';


export const getAllNotes = async (_, res) => {
    try {
        const notes = await Note.find().sort({ createdAt: -1 });
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ message: "Error fetching notes", error: error.message });
    }

};

export const getNoteById = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) return res.status(404).json({ message: "Note not found" });
        res.status(200).json(note);
    } catch (error) {
        res.status(500).json({ message: "Error fetching notes", error: error.message });
    }

};

export const createNotes = async (req, res) => {
    try {
        const { title, content } = req.body;
        const note = new Note({ title, content });
        console.log(title, content);
        const savedNote = await note.save();
        res.status(201).json(savedNote);
    } catch (error) {
        res.status(500).json({ message: "Error creating notes", error: error.message });
    }
};

export const updateNotes = async (req, res) => {
    try {
        const { title, content } = req.body;
        await Note.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
        const updatedNote = await Note.findByIdAndUpdate(req.params.id);
        if (!updatedNote) return res.status(404).json({ message: "Note not found" });

        res.status(200).json(updatedNote);
    } catch (error) {
        res.status(500).json({ message: "Error updating notes", error: error.message });

    }
    // res.status(200).send('Notes updated Successfully');
};

export const deleteNotes = async (req, res) => {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id);
        if (!deletedNote) return res.status(404).json({ message: "Note not found" });

        res.status(200).json({
            message: "Note deleted successfully"
        });
    } catch (error) {
        res.status(500).json({ message: "Error deleting notes", error: error.message });
    }
};