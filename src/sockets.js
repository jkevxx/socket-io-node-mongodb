import Note from './models/Note.js';
export default (io) => {
  io.on('connection', (socket) => {
    //
    const emitNotes = async () => {
      const notes = await Note.find();
      io.emit('server:loadnotes', notes);
    };

    emitNotes();

    socket.on('client:newnote', async (data) => {
      const newNote = new Note({
        title: data.title,
        description: data.description,
      });
      const savedNote = await newNote.save();
      // console.log(savedNote);
      io.emit('server:newnote', savedNote);
    });

    socket.on('client:deletenote', async (id) => {
      await Note.findByIdAndDelete(id);
      emitNotes();
    });

    socket.on('client:getNote', async (id) => {
      const note = await Note.findById(id);
      // console.log(note);
      io.emit('server:selectedNote', note);
    });

    socket.on('client:updateNote', async (updatedNote) => {
      await Note.findByIdAndUpdate(updatedNote._id, {
        title: updatedNote.title,
        description: updatedNote.description,
      });

      emitNotes();
    });
  });
};
