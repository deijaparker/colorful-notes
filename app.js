// Cache DOM elements
const noteForm = document.getElementById('note-form');
const notesContainer = document.querySelector('#notes-container');

// Event listener for form submission
noteForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const title = document.getElementById('note-title').value;
    const content = document.getElementById('note-content').value;
    const color = document.getElementById('note-color').value;