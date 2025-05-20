// Change text content and apply new styles
document.getElementById("changeTextBtn").addEventListener("click", function () {
  const infoText = document.getElementById("infoText");
  infoText.textContent = "The text has been changed dynamically!";
  infoText.style.color = "green";
  infoText.style.fontSize = "1.5rem";
  infoText.style.backgroundColor = "#f0f8ff";
});

// Add or remove a new paragraph element
document.getElementById("toggleElementBtn").addEventListener("click", function () {
  const existingNote = document.getElementById("dynamicNote");

  if (existingNote) {
    existingNote.remove();
  } else {
    const newNote = document.createElement("p");
    newNote.id = "dynamicNote";
    newNote.textContent = "This paragraph was added with JavaScript!";
    document.body.appendChild(newNote);
  }
});
