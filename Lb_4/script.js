document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault(); 


  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();


  if (!name || !email || !message) {
    alert("Заповніть всі поля!");
    return;
  }


  const res = await fetch("http://localhost:5000/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, email, message })
  });

  const data = await res.json();
  document.getElementById("response").textContent = data.message;
});
