let disp = `
<a href = "#tab-1" class="btn">
<button class=" btn stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1" data-filter="*">
						All Products
					</button>
          </a> 
`;
let catinfo = JSON.parse(localStorage.getItem("storedcat"));
let tr = 2;
catinfo.map((i) => {
  disp += `
  <div class="btn flex-w flex-l-m filter-tope-group m-tb-10">
            <a href="#tab-${tr++}">
              <button
                class="btn stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1"
                data-filter="*"
              >
                ${i.name}
              </button>
            </a>
            </div>
    `;
});

document.getElementById("catdispid").innerHTML = disp;

let prdata = JSON.parse(localStorage.getItem("productinfo"));

let prdisplay = `
<div class="row isotope-grid" id="tab-1">
          <div class="col-sm-6  col-md-4 col-lg-3 p-b-35 isotope-item women">
            <!-- Block2 -->
            <div class="block2">`;
prdata.map((j) => {
  prdisplay += ` 
              <div class="block2-pic hov-img0">
                <img src=""  img-fluid />

          
              </div>

              <div class="block2-txt flex-w flex-t p-t-14">
                <div class="block2-txt-child1 flex-col-l">
                  <a
                    href="product-detail.html"
                    class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                  >
                    
                  </a>

                  <span class="stext-105 cl3">  </span>
                </div>

                <div class="block2-txt-child2 flex-r p-t-3">
                  <a
                    href="#"
                    class="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                  >
            
                  </a>
                </div>
            
`;
});
prdisplay += `</div>
</div>
</div>`;

let p = 2;
catinfo.map((i) => {
  prdisplay += `
  <div>
  
  <div class=" row isotope-grid" id="tab-${p++}">
          <div class="col-sm-6  col-md-4 col-lg-3 p-b-35 isotope-item women">
            <!-- Block2 -->
            <div class="block2">`;

  prdata.map((j) => {
    if (i.id == j.catid) {
      prdisplay += `
      <div class="card" style="width: 13rem;">
  <img src="${j.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${j.pname}</h5>
    <p class="card-text">${j.pprice}</p>
        <button
                      class="btn"
                     onclick="addtocart(${j.id})">
                      Add to cart
                    </button>
    </div>
</div>
      `;
    }
  });

  prdisplay += `</div>
            </div>
          </div>`;
});

document.getElementById("prlist").innerHTML = prdisplay;

let cartcollection = [];
const addtocart = (id) => {
  let allcartcollection = JSON.parse(localStorage.getItem("cartcollection"));
  if (allcartcollection != null) {
    let checkproductid = allcartcollection.find((i) => {
      return i.id == id;
    });
    if (checkproductid != undefined) {
      alert("test");
      let finalcartdata = allcartcollection.map((i) => {
        if (i.id == id) {
          console.log(i.quanty);

          i.quanty += 1;
          // console.log("qty plus");
        }
        return i;
      });
      localStorage.setItem("cartcollection", JSON.stringify(finalcartdata));
    } else {
      let productInfo = prdata.find((i) => {
        return i.id == id;
      });

      let obj = {
        cartid: allcartcollection != null ? allcartcollection.length + 1 : 1,
        quanty: 1,
        id: id,
        pname: productInfo.pname,
        pprice: productInfo.pprice,
        image: productInfo.image,
      };
      allcartcollection.push(obj);
      localStorage.setItem("cartcollection", JSON.stringify(allcartcollection));
    }
  } else {
    let productInfo = prdata.find((i) => {
      // console.log(i.id) ;
      return i.id == id;
    });
    // console.log(prdata);

    // alert("test");
    let obj = {
      cartid: allcartcollection != null ? allcartcollection.length + 1 : 1,
      quanty: 1,
      id: id,
      pname: productInfo.pname,
      pprice: productInfo.pprice,
      image: productInfo.image,
    };
    cartcollection.push(obj);
    localStorage.setItem("cartcollection", JSON.stringify(cartcollection));
  }
};
