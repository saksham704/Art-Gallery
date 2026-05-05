document.addEventListener("DOMContentLoaded", () => {

  const container = document.getElementById("wishlistItems");
  let items = JSON.parse(localStorage.getItem("wishlist")) || [];

  let total = 0;

  items.forEach((item, index) => {

    if (!item) return;

    const price = parseFloat(item.price.replace('$', ''));
    total += price;

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${item.image}">
      <h3>${item.title}</h3>
      <p>${item.price}</p>
      <button onclick="buy(${index})">Buy</button>
      <button onclick="removeItem(${index})">Remove</button>
    `;

    container.appendChild(card);
  });

  document.getElementById("totalAmount").innerText = "Total: $" + total;
});

function removeItem(index) {
  let items = JSON.parse(localStorage.getItem("wishlist")) || [];
  items.splice(index, 1);
  localStorage.setItem("wishlist", JSON.stringify(items));
  location.reload();
}

function buy(index) {
  let items = JSON.parse(localStorage.getItem("wishlist"));
  localStorage.setItem("buyItem", JSON.stringify(items[index]));
  window.location.href = "buy.html";
}

function buyAll() {
  let items = JSON.parse(localStorage.getItem("wishlist"));
  localStorage.setItem("buyItem", JSON.stringify(items));
  window.location.href = "buy.html";
}