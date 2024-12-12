let arr = [];
function handleForm(e) {
  e.preventDefault();
  let name = document.UserForm.Uname.value.trim();
  let age = document.UserForm.Uage.value.trim();
  let salary = document.UserForm.Usalary.value.trim();
  if ((name, age, salary)) {
    const UserP = JSON.parse(localStorage.getItem("UserProfile"));
    let len = UserP == null ? 1 : UserP.length + 1;
    let name = document.UserForm.Uname.value.trim();
    let Userid1 = document.UserForm.Useri.value;

    if (Userid1 != "") {
      let updateddata = UserP.map((i) => {
        if (i.id == Userid1) {
          i.name = name;
        }
      });
      arr = updateddata;
    } else {
      let obj = {
        id: len,
        name: name,
        age: age,
        salary: salary,
      };
      arr.push(obj);
      localStorage.setItem("UserProfile", JSON.stringify(arr));
      loadCategories();
    }
  } else {
    console.log(console.error);
  }
  document.getElementById("Useri").value = "";
  document.getElementById("uage").value = "";
  document.getElementById("usalary").value = "";
}
function loadCategories() {
  const categoryList = document.getElementById("categoryList");
  const UserP = JSON.parse(localStorage.getItem("UserProfile"));
  categoryList.innerHTML = UserP.map(
    (UserP, index) => `
      <tr>
          <td>${index + 1}</td>
          <td>${UserP.name}</td>
          <td>${UserP.age}</td>
          <td>${UserP.salary}</td>
          <td>
              <div>
                  <button type="button" class="btn btn-outline-secondary btn-sm" onclick="edit(${
                    UserP.id
                  })">Edit</button>
                  <br>
                  <button type="button" class="btn btn-outline-secondary btn-md" onclick="deldata(${
                    UserP.id
                  })">Delete</button>
              </div>
          </td>
      </tr>
  `
  ).join("");
}
document.getElementById("UserForm").addEventListener("submit", handleForm);

function edit(id) {
  const UserP = JSON.parse(localStorage.getItem("UserProfile"));
  const result = UserP.find((i) => {
    return i.id == id;
  });
  document.getElementById("Useri").value = result.name;
  document.getElementById("uage").value = result.age;
  document.getElementById("usalary").value = result.salary;
  document.getElementById("Userid").value = result.id;
}

const deldata = (id) => {
  let Userdata = JSON.parse(localStorage.getItem("UserProfile"));
  let storedesult = Userdata.filter((i) => {
    return i.id != id;
  });
  localStorage.setItem("UserProfile", JSON.stringify(storedesult));
  loadCategories();
};

loadCategories();
