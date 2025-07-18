// Get the unique key for storage based on the URL
const storageKey = `simpleTextEditorContent_${window.location.hostname}`;

// Function to check if a duplicate tab is already open
function checkDuplicateTab() {
  const isOpenKey = `simpleTextEditorOpen_${window.location.href}`;

  if (localStorage.getItem(isOpenKey) === "true") {
    alert("You cannot have two windows open with the same sticky notes.");
    return true;
  }

  // Mark this tab as open
  localStorage.setItem(isOpenKey, "true");

  // Clear open marker on window unload
  window.addEventListener("beforeunload", () => {
    localStorage.removeItem(isOpenKey);
  });

  return false;
}

// Function to create the editor with a draggable header and load saved text
function createEditor() {
  // if (checkDuplicateTab()) return; // Exit if duplicate tab detected

  // Container for editor and draggable header
  const editorContainer = document.createElement("div");
  editorContainer.id = "simpleTextEditorContainer";
  editorContainer.style.position = "fixed";
  editorContainer.style.top = "10px";
  editorContainer.style.right = "10px";
  editorContainer.style.zIndex = "2147483647"; // High z-index for fullscreen video
  editorContainer.style.width = "220px";
  editorContainer.style.height = "180px";

  // Draggable header
  const header = document.createElement("div");
  header.innerText = "Notes";
  header.style.backgroundColor = "green";
  header.style.color = "white";
  header.style.padding = "5px";
  header.style.cursor = "move";

  // Textarea for note-taking
  const editor = document.createElement("textarea");
  editor.id = "simpleTextEditor";
  editor.style.width = "100%";
  editor.style.height = "140px";
  editor.style.padding = "10px";
  editor.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
  editor.style.border = "1px solid #ccc";
  editor.style.fontSize = "14px";
  editor.style.resize = "none";

  // Load saved text specific to the URL from local storage
  editor.value = localStorage.getItem(storageKey) || "";

  // Save text to local storage every 2 seconds, specific to the URL
  setInterval(() => {
    localStorage.setItem(storageKey, editor.value);
  }, 2000);

  // Append header and editor to container
  editorContainer.appendChild(header);
  editorContainer.appendChild(editor);
  document.body.appendChild(editorContainer);

  // Make the editor draggable
  let offsetX, offsetY;
  header.onmousedown = (e) => {
    offsetX = e.clientX - editorContainer.getBoundingClientRect().left;
    offsetY = e.clientY - editorContainer.getBoundingClientRect().top;
    document.onmousemove = (e) => {
      editorContainer.style.left = `${e.clientX - offsetX}px`;
      editorContainer.style.top = `${e.clientY - offsetY}px`;
      editorContainer.style.right = "unset";
    };
    document.onmouseup = () => {
      document.onmousemove = null;
      document.onmouseup = null;
    };
  };
}

// Function to toggle editor visibility
function toggleEditor() {
  const editorContainer = document.getElementById("simpleTextEditorContainer");
  if (editorContainer) {
    editorContainer.style.display =
      editorContainer.style.display === "none" ? "block" : "none";
  } else {
    createEditor();
  }
}

// // Listen for fullscreen changes to reattach the editor if necessary
// document.addEventListener("fullscreenchange", () => {
//   const editorContainer = document.getElementById("simpleTextEditorContainer");
//   if (document.fullscreenElement) {
//     if (!editorContainer) {
//       createEditor();
//     }
//   } else if (editorContainer) {
//     editorContainer.remove(); // Remove editor when exiting fullscreen
//   }
// });

// Initial toggle when the extension icon is clicked
toggleEditor();
