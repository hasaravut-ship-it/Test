function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  // hardcoded (demo only)
  if (user === "admin" && pass === "12345") {
    // store login state
    sessionStorage.setItem("auth", "true");

    // redirect to main page
    window.location.href = "index.html";
  } else {
    document.getElementById("error").innerText = "Invalid credentials";
  }
}