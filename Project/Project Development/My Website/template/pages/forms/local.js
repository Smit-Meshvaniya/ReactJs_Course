function loadCategories() {
  const cate = JSON.parse(localStorage.getItem("storedcat"));
  const categoryList = document.getElementById("catbodyid");
  categoryList.innerHTML = "";

  categoryList.innerHTML = cate
    .map(
      (cat) => `
      <tr>
          <td>${cat.id}</td>
          <td>${cat.name}</td>
          <td>
              <div>
                  <button type="button" class="btn btn-outline-secondary btn-sm" onclick="editdata(${cat.id})">Edit</button>
                  <br>
                  <button type="button" class="btn btn-outline-secondary btn-md" onclick="deldata(${cat.id})" >Delete</button>
              </div>
          </td>
      </tr>
  `
    )
    .join("");
}

// Function to generate a unique ID based on the highest existing ID
const generateUniqueId = (categories) => {
  const maxId = categories.reduce((max, cat) => Math.max(max, cat.id), 0);
  return maxId + 1;
};

// Function to delete a category by ID
const deldata = (id) => {
  console.log(`Deleting category with ID ${id}`);

  let catdata = JSON.parse(localStorage.getItem("storedcat")) || [];
  catdata = catdata.filter((category) => category.id !== id);

  localStorage.setItem("storedcat", JSON.stringify(catdata));
  console.log(`Category with ID ${id} has been deleted.`);

  loadCategories();
};

// Function to save or update a category
const saveCat = (e) => {
  e.preventDefault();

  let catdata = JSON.parse(localStorage.getItem("storedcat")) || [];
  let name = document.catfrm.catinpname.value;
  let id = document.catfrm.catid.value; // Check if ID is provided

  if (id) {
    // Update existing category
    catdata = catdata.map((category) =>
      category.id === parseInt(id) ? { id: parseInt(id), name: name } : category
    );
    localStorage.setItem("storedcat", JSON.stringify(catdata));
    console.log(`Category with ID ${id} has been updated.`);
  } else {
    // Add new category
    let newId = generateUniqueId(catdata);
    let obj = {
      id: newId,
      name: name,
    };

    catdata.push(obj);
    localStorage.setItem("storedcat", JSON.stringify(catdata));
    console.log(`New category with ID ${newId} has been added.`);
  }

  document.catfrm.catinpname.value = "";
  document.catfrm.catid.value = "";

  loadCategories();
};

// Function to handle editing a category
const editdata = (id) => {
  let catdata = JSON.parse(localStorage.getItem("storedcat")) || [];
  let category = catdata.find((cat) => cat.id === id);

  if (category) {
    document.catfrm.catinpname.value = category.name;
    document.catfrm.catid.value = category.id; // Set ID to input for updating
  }
};

// Attach the event listener to the form submit event
document.getElementById("catfrmid").addEventListener("submit", saveCat);

// Initial load of categories
loadCategories();
