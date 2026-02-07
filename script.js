// store items here
const items = [];

// CREATE ITEM
function createItem() {
  const name = document.getElementById("name").value;
  const description = document.getElementById("description").value;
  const price = Number(document.getElementById("price").value);

  const item = {
    id: items.length + 1, // numeric id
    name,
    description,
    price
  };

  items.push(item);

  showResult(`✅ Item Created Successfully

ID: ${item.id}
Name: ${item.name}
Description: ${item.description}
Price: ${item.price}`);
}

// FIND ITEM
function findItem() {
  // ⭐ FIX → convert to number
  const id = Number(document.getElementById("findId").value);

  const item = items.find(i => i.id === id);

  if (item) {
    showResult(`✅ Item Found

ID: ${item.id}
Name: ${item.name}
Description: ${item.description}
Price: ${item.price}`);
  } else {
    showResult("❌ Item not found");
  }
}

// RESULT DISPLAY
function showResult(message) {
  document.getElementById("result").innerText = message;
}
