function addToWishlist(button) {
  const card = button.closest(".card");

  const item = {
    title: card.querySelector("h3").innerText,
    price: card.querySelector(".price").innerText,
    image: card.querySelector("img").src
  };

  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  wishlist.push(item);

  localStorage.setItem("wishlist", JSON.stringify(wishlist));

  alert("Added to Wishlist");
}

function buyArt(button) {
  const card = button.closest(".card");

  const item = {
    title: card.querySelector("h3").innerText,
    price: card.querySelector(".price").innerText,
    image: card.querySelector("img").src
  };

  localStorage.setItem("buyItem", JSON.stringify(item));
  window.location.href = "buy.html";
}