let addDate = [
  // {
  //   id: "1",
  //   date: "10.02.2023",
  //   content: "add favourite sports",
  // },
];

function makeNote(note) {
  const div = document.createElement("div");
  div.setAttribute("class", "card");

  const id = `${note["id"]}`;
  div.setAttribute("id", id);

  const h2 = document.createElement("h2");
  h2.innerText = datecontentvalue(note["date"]);

  const h3 = document.createElement("h3");
  h3.innerText = note["content"];

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Remove";
  deleteBtn.setAttribute("id", "deletebtn");
  deleteBtn.setAttribute("type", "submit");
  deleteBtn.addEventListener("click", function () {
    // removecard(addDate["id"]);
    div.remove();
  });
  div.appendChild(h2);
  div.appendChild(h3);
  div.appendChild(deleteBtn);
  return div;
}

function updateListUI() {
  clearApp();
  for (let i = 0; i < addDate.length; i++) {
    const Notes = makeNote(addDate[i]);
    // const datevalue = document.querySelector("#app");
    // console.log("addvale", datevalue);
    // datevalue.appendChild(Notes);
    appendToApp(Notes);
  }
}

function addcard(cardadd) {
  addDate.push(cardadd);
  saveLocalStorage();
  updateListUI();
}
//
// function removecard(removenote) {
//   const s = addDate.findIndex((note) => note.id == removenote);
//   addDate.slice(s, 1);
//   updateListUI;
// }
// hookform
function hookForm() {
  const form = document.querySelector("#Entry-date");
  // console.log("helo");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const newdate = document.querySelector("#get-date").value;
    const newnote = document.querySelector("#get-note").value;

    const editnote = {
      id: new Date().getDate(),
      date: newdate,
      content: newnote,
    };
    addcard(editnote);
  });
}
function appendToApp(DiaryDiv) {
  const app = document.querySelector("#app");
  app.appendChild(DiaryDiv);
}

function clearApp() {
  const app = document.querySelector("#app");
  app.innerHTML = "";
}

function saveLocalStorage() {
  const str = JSON.stringify(addDate);
  localStorage.setItem("my-list", str);
}

function getLocalStorage() {
  const str = localStorage.getItem("my-list");
  if (!str) {
    favMovies = [];
  } else {
    favMovies = JSON.parse(str);
  }
}
//seprate date and month year
// function datecontentvalue(slicevalue) {
//   const c = new Date(slicevalue);
//   let dd = c.getDate();
//   let mm = c.getMonth();
//   let yy = c.getFullYear();
//   const m = dd + "/" + mm + "/" + yy;
//   if (dd <= 31) {
//     dd = "0" + dd;
//   }
//   if (mm <= 12) {
//     mm = "0" + mm;
//   }

//   return m;
// }
function datecontentvalue(slicevalue) {
  const c = new Date(slicevalue);
  let dd = c.getDate();
  let mm = c.getMonth();
  let yy = c.getFullYear();
  if (dd <= 31) {
    dd = "0" + dd;
  }
  if (mm <= 12) {
    mm = "0" + mm;
  }
  const m = dd + "/" + mm + "/" + yy;
  return m;
}
function sortnotes() {
  notes.sort(function (a, b) {
    return new Date(b.c) - new Date(a.c);
  });
}
getLocalStorage();
hookForm();
updateListUI();
// addDate.reverse();
