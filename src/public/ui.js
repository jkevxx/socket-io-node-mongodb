import { deleteNote, saveNotes } from './socket.js';
const notesList = document.querySelector('#notes');

const noteUI = (note) => {
  const div = document.createElement('div');
  div.innerHTML = `
      <h2>${note.title}</h2>
      <p>${note.description}</p>
      <div>
        <button class="delete" data-id="${note._id}">Delete</button>
        <button>Update</button>
      </div>
  `;

  const btnDelete = div.querySelector('.delete');
  // console.log(btnDelete);
  btnDelete.addEventListener('click', () => {
    // console.log(btnDelete.dataset.id);
    deleteNote(btnDelete.dataset.id);
  });

  return div;
};

export const renderNotes = (notes) => {
  // console.log(notes);
  notesList.innerHTML = '';
  notes.forEach((note) => notesList.append(noteUI(note)));
};

export const onHandleSubmit = (e) => {
  e.preventDefault();

  saveNotes(noteForm['title'].value, noteForm['description'].value);
};

export const appendNote = (note) => {
  notesList.append(noteUI(note));
};
