let addDate = [
  //   {
  //     id: "1",
  //     date: "10.02.2023",
  //     content: "add favourite sports",
  //   },
];

function makeNote(note) {
  const div = document.createElement("div");
  div.setAttribute("class", "card");

  const id = `${note["id"]}`;
  div.setAttribute("id", id);

  const h2 = document.createElement("h2");
  h2.innerText = note["date"];

  const h3 = document.createElement("h3");
  h3.innerText = note["content"];

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Remove";
  deleteBtn.setAttribute("id", "deletebtn");
  deleteBtn.addEventListener("click", function () {
    removecard(addDate["id"]);
  });
  div.appendChild(h2);
  div.appendChild(h3);
  div.appendChild(deleteBtn);
  return div;
}

function updateListUI() {
  for (let i = 0; i < addDate.length; i++) {
    const Notes = makeNote(addDate[i]);
    const datevalue = document.querySelector("#app");
    // console.log("addvale", datevalue);
    datevalue.appendChild(Notes);
  }
}
function removecard(addcontent) {
  const datescontent = addDate.filter((note) => note.id == addcontent);
}
updateListUI();
// addDate.reverse();
