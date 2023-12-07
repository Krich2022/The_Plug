const dashboard = document.getElementById("dashboard");
const search = document.getElementById("search");
const login = document.getElementById("login");

dashboard.addEventListener("click", () => {
  document.location.replace("/dashboard");
});

if (login) {
  login.addEventListener("click", () => {
    document.location.replace("/");
  });
}
search.addEventListener("click", () => {
  document.location.replace("/search");
});
