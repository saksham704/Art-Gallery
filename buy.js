document.addEventListener("DOMContentLoaded", () => {
  const data = JSON.parse(localStorage.getItem("buyItem"));
  const div = document.getElementById("buyItem");

  if (!data) {
    div.innerHTML = "<h2>No item selected.</h2>";
    return;
  }

  let total = 0;

  // Container for items
  const itemsContainer = document.createElement("div");
  itemsContainer.className = "buy-container";

  if (Array.isArray(data)) {
    data.forEach(item => {
      const price = parseFloat(item.price.replace('$', '')) || 0;
      total += price;

      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <h3>${item.title}</h3>
        <p class="price">${item.price}</p>
      `;

      itemsContainer.appendChild(card);
    });
  } else {
    const price = parseFloat(data.price.replace('$', '')) || 0;
    total += price;

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${data.image}" alt="${data.title}">
      <h3>${data.title}</h3>
      <p class="price">${data.price}</p>
    `;

    itemsContainer.appendChild(card);
  }

  div.appendChild(itemsContainer);

  // ✅ SUMMARY BOX (FIXED ALIGNMENT)
  const summary = document.createElement("div");
  summary.className = "purchase-summary";

  summary.innerHTML = `
    <h2 class="success-msg">✅ Purchase Successful!</h2>
    <h3 class="total-msg">Total Paid: $${total.toFixed(2)}</h3>
  `;

  div.appendChild(summary);
});