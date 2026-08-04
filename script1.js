if (localStorage.getItem("notes") === null) {
    localStorage.setItem("notes", JSON.stringify([]));
}

displayNotes();

function addNote() {
    var noteInput = document.getElementById("addNote");
    var note = noteInput.value.trim();
    if (note === "") {
        alert("Enter Note");
        return;
    }

    var notes = JSON.parse(localStorage.getItem("notes"));
    notes.push(note);
    localStorage.setItem("notes", JSON.stringify(notes));

    noteInput.value = "";
    displayNotes();
}

function getNotes() {
    var notes = JSON.parse(localStorage.getItem("notes"));
    var output = "";

    if (notes.length === 0) {
        output = "No Notes Available";
    } else {
        for (var i = 0; i < notes.length; i++) {
            output += notes[i] + "<br>";
        }
    }

    document.getElementById("result").innerHTML = output;
}

function deleteNote() {
    var deleteInput = document.getElementById("deleteNote");
    var note = deleteInput.value.trim();
    var notes = JSON.parse(localStorage.getItem("notes"));
    var index = notes.indexOf(note);

    if (index === -1) {
        alert("Note Not Found");
        return;
    }

    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));

    deleteInput.value = "";
    displayNotes();
}

function clearNotes() {
    localStorage.setItem("notes", JSON.stringify([]));
    document.getElementById("result").innerHTML = "";
    displayNotes();
}

function displayNotes() {
    var notes = JSON.parse(localStorage.getItem("notes"));
    var output = "";

    if (notes.length === 0) {
        output = "<h3>No Notes Available</h3>";
    } else {
        for (var i = 0; i < notes.length; i++) {
            output += "<div class=\"note\">" + notes[i] + "</div>";
        }
    }

    document.getElementById("notesList").innerHTML = output;
}
