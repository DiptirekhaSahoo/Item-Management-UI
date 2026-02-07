// where items will be stored
const items = [];

// ADD ITEM
function addItem() {
  const name = document.getElementById("name").value;
  const description = document.getElementById("description").value;
  const price = Number(document.getElementById("price").value);

  const item = {
    id: items.length + 1,
    name,
    description,
    price
  };

  items.push(item);

  document.getElementById("result").innerText =
`✅ Item Created Successfully

ID: ${item.id}
Name: ${item.name}
Description: ${item.description}
Price: ${item.price}`;
}

// GET ITEM BY ID
function getItem() {
  // ⭐ IMPORTANT FIX → convert to number
  const id = Number(document.getElementById("itemId").value);

  const item = items.find(i => i.id === id);

  if (item) {
    document.getElementById("result").innerText =
`✅ Item Found

ID: ${item.id}
Name: ${item.name}
Description: ${item.description}
Price: ${item.price}`;
  } else {
    document.getElementById("result").innerText = "❌ Item not found";
  }
}
