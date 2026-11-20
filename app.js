const search = document.getElementById("topicSearch");
const rows = [...document.querySelectorAll(".module-row")];
const empty = document.getElementById("emptyState");

search.addEventListener("input", () => {
  const query = search.value.trim().toLowerCase();
  let visible = 0;
  rows.forEach(row => {
    const match = (row.innerText + " " + row.dataset.search).toLowerCase().includes(query);
    row.hidden = !match;
    if (match) visible++;
  });
  empty.hidden = visible !== 0;
});

document.addEventListener("keydown", event => {
  if (event.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
    event.preventDefault();
    search.focus();
  }
  if (event.key === "Escape" && document.activeElement === search) {
    search.value = "";
    search.dispatchEvent(new Event("input"));
    search.blur();
  }
});