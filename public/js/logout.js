async function logout() {
  const response = await fetch("/api/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    document.alert("Failed to log out.");
  }
}

document.querySelector("#logout").addEventListener("click", logout);
