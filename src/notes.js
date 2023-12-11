import { insert, saveDB, getDB } from "./db.js";

export const newNote = async (note, tags) => {
    const newNote = {
        tags,
        id: Date.now(),
        content: note
    }

    await insert(newNote)
    return newNote
}

export const getAllNotes = async () => {
    const { notes } = await getDB()
    return notes
}

export const findNotes = async (filter) => {
    const { notes } = await getDB()
    /* A filter over the notes array to match normalized filter string with note.content
    // Examples
    // 'Walk my dog todo' -> 'my dog' => is a match
    // 'Walk my dog todo' -> 'dog my' => is not a match */
    return notes.filter( (note) => note.content.toLowerCase().includes(filter.toLowerCase()) )
}

export const removeNote = async (id) => {
    const { notes } = await getDB()
    const match = notes.find( (note) => note.id === id )

    if (match) {
        // The reason of doing this is to not do a mutable operation
        const newNotes = notes.filter( (note) => note.id !== id )
        await saveDB({notes: newNotes})
        return id
    }
}

export const removeAllNotes = () => saveDB({notes: []})