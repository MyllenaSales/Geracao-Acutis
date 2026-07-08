const noteTitle = document.querySelector(".noteTitle");
const noteText = document.querySelector(".noteText");
const addButton = document.querySelector(".addButton");
const notesContainer = document.querySelector(".notesContainer");

let notes = JSON.parse(localStorage.getItem("notes")) || [];
const saveNotes = () => {
    localStorage.setItem("notes", JSON.stringify(notes));

};
const renderNotes = () => {
    notesContainer.innerHTML = notes
        .map(({ id, title, text }) => {
            return `
                <article class="note">
                    <h3>${title}</h3>
                    <p>${text}</p>
                    <div class="noteButtons">
                        <button
                            class="editButton"
                            data-id="${id}">
                            Editar
                        </button>
                        <button
                            class="deleteButton"
                            data-id="${id}">
                            Excluir
                        </button>
                    </div>
                </article>
            `;
        })
        .join("");
};

const clearInputs = () => {
    noteTitle.value = "";
    noteText.value = "";

};

const addNote = () => {
    const title = noteTitle.value.trim();
    const text = noteText.value.trim();
    if (!title && !text) return;

    notes.unshift({
        id: Date.now(),
        title,
        text
    });
    saveNotes();
    renderNotes();
    clearInputs();
};

const deleteNote = id => {
    notes = notes.filter(note => note.id !== id);
    saveNotes();
    renderNotes();

};

const editNote = id => {
    const note = notes.find(note => note.id === id);
    const newTitle = prompt("Título", note.title);
    if (newTitle === null) return;
    const newText = prompt("Texto", note.text);
    if (newText === null) return;
    note.title = newTitle;
    note.text = newText;
    saveNotes();
    renderNotes();
};

addButton.addEventListener("click", addNote);
notesContainer.addEventListener("click", event => {

    const id = Number(event.target.dataset.id);

    if (event.target.classList.contains("deleteButton")) {
        deleteNote(id);
    }

    if (event.target.classList.contains("editButton")) {
        editNote(id);
    }

});

renderNotes();