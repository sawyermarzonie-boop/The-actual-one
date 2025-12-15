document.addEventListener("input", (e) => {
  if (e.target.id === "additionalInfo") {
    if (e.target.value.toLowerCase().includes("yourmom")) {
      window.location.href = "secret.html";
    }
  }
});
