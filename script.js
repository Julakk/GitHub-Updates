const editor = document.getElementById("editor");
const buttons = document.querySelectorAll("button");

// New File
buttons[0].addEventListener("click", () => {
    if (confirm("Create a new file?")) {
        editor.value = "";
    }
});

// Open File
buttons[1].addEventListener("click", () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".pwn,.txt";

    input.onchange = (e) => {
        const file = e.target.files[0];

        if (!file) return;

        const reader = new FileReader();

        reader.onload = (event) => {
            editor.value = event.target.result;
        };

        reader.readAsText(file);
    };

    input.click();
});

// Save File
buttons[2].addEventListener("click", () => {
    const blob = new Blob([editor.value], {
        type: "text/plain"
    });

    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "script.pwn";
    a.click();

    URL.revokeObjectURL(a.href);
});