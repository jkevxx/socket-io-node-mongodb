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
