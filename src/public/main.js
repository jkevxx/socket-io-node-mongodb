import { loadNotes, onNewNote, onSelectNote } from './socket.js';
import { appendNote, onHandleSubmit, renderNotes, fillForm } from './ui.js';

onNewNote(appendNote);
loadNotes(renderNotes);
onSelectNote(fillForm);

const noteForm = document.querySelector('#noteForm');

noteForm.addEventListener('submit', onHandleSubmit);
