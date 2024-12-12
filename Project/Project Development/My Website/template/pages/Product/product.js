
let dropdown = "<option>--select category--</option>";
const getcategory = () => {
  let catinfo = JSON.parse(localStorage.getItem("storedcat"));
  catinfo.map((i) => {
    dropdown += `<option value = ${i.id}>${i.name}</option>`;
  });
  document.getElementById("catid").innerHTML = dropdown;
};
getcategory();
let productdata = [];

const saveproduct = (e) => {
  e.preventDefault();
  let productinfo = JSON.parse(localStorage.getItem("productinfo"));
  let len = (productinfo != null) ? productinfo.length + 1 : 1;
  let pname = document.productfrm.productname.value;
  let catid = document.productfrm.catid.value; // Check if ID is provided
  let pprice = document.productfrm.productprice.value;
  let pid = document.productfrm.productid.value;
  let image = localStorage.getItem("catimg");
  // console.log(pprice);

  if (pid != "") {
    let updatedproduct = productinfo.map((i) => {
      if (i.id == pid) {
        i.pname = pname;
        i.pprice = pprice;
        i.catid = catid;
        i.image = (image!=null)?image:i.image;
      }
      return i;
    });
    productdata = updatedproduct;
  } else {
    let obj = {
      id: len,
      pname: pname,
      pprice: pprice,
      catid: catid,
      image: image,
    };
    productdata = [...productdata, obj];
  }

  localStorage.setItem("productinfo", JSON.stringify(productdata));
  document.productfrm.productname.value = "";
  document.productfrm.catid.value = "";
  document.productfrm.productprice.value = "";
  document.getElementById("imgid").src = "";
  localStorage.removeItem("imgid");
  loadCategories();
};

function loadCategories() {
  const productinfo = JSON.parse(localStorage.getItem("productinfo"));
  let catinfo = JSON.parse(localStorage.getItem("storedcat"));

  let pr = "";
  if (productinfo != null) {
    productinfo.map((i) => {
      catinfo.map((j) => {
        if (j.id == i.catid) {
          i.catname = j.name;
        }
      });
    });

    productinfo.map((i) => {
      catinfo.map((j) => {
        if (j.id == i.catid) {
          i.catid = j.name;
        }
      });
      pr += `
        <tr>
            <td>${i.id}</td>
            <td><img src="${i.image}" height="50px" width="50px"/></td>
            <td>${i.pname}</td>
            <td>${i.catid}</td>
            <td>${i.pprice}</td>
            <td>
              <div>
                    <button type="button" class="btn btn-outline-secondary btn-sm" onclick="editdata(${i.id})">Edit</button>
                    <br>
                    <button type="button" class="btn btn-outline-secondary btn-md" onclick="deldata(${i.id})" >Delete</button>
                </div></td>
          </tr>
    `;
    });

    document.getElementById("productList").innerHTML = pr;
  }
}
loadCategories();
const editdata = (id) => {
  let productinfo = JSON.parse(localStorage.getItem("productinfo"));
  let final_res = productinfo.find((i) => {
    return i.id == id;
  });

  document.productfrm.productname.value = final_res.pname;
  document.productfrm.productprice.value = final_res.pprice;
  document.productfrm.catid.value = final_res.catid;
  document.getElementById("imgid").src = final_res.image;
  document.productfrm.productid.value = id;
};
loadCategories();

const saveImgUrl = (event) => {
  var reader = new FileReader();
  reader.onload = function () {
    var output = document.getElementById("imgid");
    output.src = reader.result;
    localStorage.setItem("catimg", reader.result);
  };
  reader.readAsDataURL(event.target.files[0]);
};
document.getElementById("productfrmid").addEventListener("submit", saveproduct);
