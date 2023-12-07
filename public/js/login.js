const loginFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#usernameLogin").value.trim();
  const password = document.querySelector("#passwordLogin").value.trim();

  if (username && password) {
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      const userData = await response.json();
      console.log(userData);
      sessionStorage.setItem("user_id", userData.user_id);
      document.location.replace("/dashboard");
    } else {
      document.getElementById("loginError").classList.remove("hidden");
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.getElementById("usernameSignup").value.trim();
  const email = document.getElementById("emailSignup").value.trim();
  const password = document.getElementById("passwordSignup").value.trim();
  const name = document.getElementById("nameSignup").value.trim();
  try {
    const response = await fetch("/api/user/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password, name }),
    });
    if (response.ok) {
      document.location.replace("/dashboard");
    }
  } catch (error) {
    console.error("Error during registration:", error);
  }
};

const loginBtn = document.getElementById("loginBtn");
const signUpBtn = document.getElementById("signUpBtn");

if (loginBtn) {
  const signUpPage = document.getElementById("signUp");
  loginBtn.addEventListener("click", loginFormHandler);
  signUpPage.addEventListener("click", () => {
    document.location.replace("/signup");
  });
};
if (signUpBtn) {
  const loginPage = document.getElementById("loginHere");
  signUpBtn.addEventListener("click", signupFormHandler);
  loginPage.addEventListener("click", () => {
    document.location.replace("/");
  });
};
