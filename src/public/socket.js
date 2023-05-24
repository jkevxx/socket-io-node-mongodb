const socket = io();

export const loadNotes = (callback) => {
  socket.on('server:loadnotes', callback);
  // socket.on('loadnotes', (data) => {
  //   console.log(data);
  // });
};

export const saveNotes = (title, description) => {
  socket.emit('client:newnote', { title, description });
};

export const onNewNote = (callback) => {
  socket.on('server:newnote', callback);
};

export const deleteNote = (id) => {
  socket.emit('client:deletenote', id);
};

export const getNoteById = (id) => {
  socket.emit('client:getNote', id);
};

export const onSelectNote = (callback) => {
  socket.on('server:selectedNote', callback);
};

export const updateNote = (id, title, description) => {
  socket.emit('client:updateNote', { _id: id, title, description });
};
