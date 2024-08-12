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

    // Form validation
    if (!title || !content) {
        alert('Please fill in both the title and content.');
        return;
    }
    if (title.length > 50) {
        alert('Title should be under 50 characters.');
        return;
    }

    // Create and append note element
    const note = createNoteElement(title, content, color);
    notesContainer.appendChild(note);

    // Clear form fields
    noteForm.reset();
});

// Function to create note element
function createNoteElement(title, content, color) {
    const note = document.createElement('div');
    note.classList.add('note');
    note.style.backgroundColor = color;

    const noteTitle = document.createElement('h2');
    noteTitle.textContent = title;
    note.appendChild(noteTitle);

    const noteContent = document.createElement('p');
    noteContent.textContent = content;
    note.appendChild(noteContent);

    return note;
}