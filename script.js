
function addItem() {
  const item = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    price: Number(document.getElementById("price").value),
  };

  fetch("https://item-management-production-fa25.up.railway.app/api/items", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  })
    .then(res => res.json())
    .then(data => {
      document.getElementById("result").textContent =
        JSON.stringify(data, null, 2);
    })
    .catch(err => {
      document.getElementById("result").textContent = err.message;
    });
}
