
function updateUI() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  if (isLoggedIn) {
    document.querySelector(".main-content-container").style.display = "none"; 
    document.querySelector(".user-info").style.display = "block"; 
    document.querySelector(".user-email").textContent = `
      Hello Welcome to Perfume Shop, ${localStorage.getItem("userEmail")}`; 
  } else {
    document.querySelector(".main-content-container").style.display = "block"; 
    document.querySelector(".user-info").style.display = "none";
  }
}

document.getElementById("loginButton").addEventListener("click", function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const rememberMe = document.getElementById("rememberMe").checked;

  
  if (email && password) {

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", email); 

    localStorage.setItem("rememberMe", rememberMe);

    updateUI();
  } else {
    alert("Please enter both email and password.");
  }
});

document.getElementById("logoutButton").addEventListener("click", function () {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("userEmail");

  localStorage.removeItem("rememberMe");

  updateUI();
});

updateUI();
