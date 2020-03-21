const editor = document.getElementById('editor');

editor.addEventListener("input", markdown)

function markdown() {
    const preview = editor.value;
    document.getElementById('preview').innerHTML =
        marked(preview);
};

marked.setOptions({
    breaks: true
  });

markdown();

