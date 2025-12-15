const search = document.getElementById("search");
const commands = document.querySelectorAll(".command");

search.addEventListener("input", () => {
  const value = search.value.toLowerCase();

  commands.forEach(cmd => {
    cmd.style.display = cmd.textContent.toLowerCase().includes(value)
      ? "block"
      : "none";
  });
});
