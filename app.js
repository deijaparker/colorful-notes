// Cache DOM elements
const noteForm = document.getElementById('note-form');
const notesContainer = document.querySelector('#notes-container');

// Event listener for form submission
noteForm.addEventListener('submit', function(e) {
    e.preventDefault();