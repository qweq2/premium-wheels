function order(productName) {
    document.getElementById('product').value = productName;
    window.scrollTo({ top: document.getElementById('order-form').offsetTop, behavior: 'smooth' });
  }
  
  function submitForm(event) {
    event.preventDefault();
    alert("Спасибо за заказ! Мы свяжемся с вами в ближайшее время.");
  }
  
  const products = [
    { name: "Шины BMW Continental ContiWinterContact TS 860S", type: "шина", brand: "bmw", price: 84500, img: "https://mosautoshina.ru/i/tyre/continental-contiwintercontact-ts-860-s-400.webp" },
    { name: "Шины BMW Michelin Pilot Sport PS4 S", type: "шина", brand: "bmw", price: 80000, img: "https://mosautoshina.ru/i/tyre/michelin-pilot-sport-ps4-s-500.webp" },
    { name: "Шины Mercedes Michelin X-ice 3", type: "шина", brand: "mercedes", price: 89200, img: "https://mosautoshina.ru/i/tyre/michelin-x-ice-3-500.webp" },
    { name: "Шины Mercedes WestLake ZuperAce SA-57", type: "шина", brand: "mercedes", price: 86030, img: "https://mosautoshina.ru/i/tyre/westlake-sa57-500.webp" },
    { name: "Шины Audi Continental AllSeasonContact ContiSeal", type: "шина", brand: "audi", price: 82900, img: "https://mosautoshina.ru/i/tyre/continental-allseasoncontact-contiseal-500.webp" },
    { name: "Диски BMW RST R128 7.5x18/5x112 ET 51 Dia 66.6 BL", type: "диск", brand: "bmw", price: 89000, img: "https://mosautoshina.ru/i/wheel/rst-r128-bl-400.webp" },
    { name: "Диски BMW Скад Мюнхен 8x18/5x112 ET 40 Dia 66.6 селена", type: "диск", brand: "bmw", price: 89000, img: "https://mosautoshina.ru/i/wheel/skad-munchen-selena-400.webp" },
    { name: "Диски BMW Replay B209 8x18/5x112 ET 30 Dia 66.6 BKF", type: "диск", brand: "bmw", price: 89000, img: "https://mosautoshina.ru/i/wheel/replay-b209-bkf-400.webp" },
    { name: "Диски BMW Mak Komet 8x18/5x112 ET 33 Dia 66.6 silver", type: "диск", brand: "bmw", price: 89000, img: "https://mosautoshina.ru/i/wheel/mak-komet-silver-400.webp" },
    { name: "Диски Mercedes Replay B221 8x18/5x112 ET 30 Dia 66.6 GMF", type: "диск", brand: "mercedes", price: 80000, img: "https://mosautoshina.ru/i/wheel/replay-b221-gmf-400.webp" },
    { name: "Диски Mercedes RST R029 8.5x19/5x112 ET 32 Dia 66.6 HS", type: "диск", brand: "mercedes", price: 80000, img: "https://mosautoshina.ru/i/wheel/rst-r029-hs-400.webp" },
    { name: "Диски Mercedes RPLC BM98 7.5x19/5x112 ET 32 Dia 66.6 BLK", type: "диск", brand: "mercedes", price: 80000, img: "https://mosautoshina.ru/i/wheel/rplc-bm98-blk-400.webp" },
    { name: "Диски Mercedes LS FlowForming RC04 8.5x19/5x112 ET 32 Dia 66.6 MGMU", type: "диск", brand: "mercedes", price: 80000, img: "https://mosautoshina.ru/i/wheel/ls-flowforming-rc04-400.webp" },
    { name: "Диски Audi Khomen Wheels KHW1504 (Rapid) 6x15/5x100 ET 38 Dia 57.1 Black semi-matt", type: "диск", brand: "audi", price: 83000, img: "https://mosautoshina.ru/i/wheel/khomen-wheels-khw1504-rapid-black-semi-matt-400.webp" },
    { name: "Диски Audi iFree Азур 6.5x16/5x112 ET 43 Dia 57.1 блэк джек", type: "диск", brand: "audi", price: 83000, img: "https://mosautoshina.ru/i/wheel/ifree-azur-blek-dzhek-400.webp" },
    { name: "Диски Audi Replay VV27 6.5x16/5x112 ET 33 Dia 57.1 S", type: "диск", brand: "audi", price: 83000, img: "https://mosautoshina.ru/i/wheel/replay-vv27-s-400.webp" },
    { name: "Диски Audi Carwel Лача 6.5x16/5x112 ET 42 Dia 57.1 AB", type: "диск", brand: "audi", price: 83000, img: "https://mosautoshina.ru/i/wheel/carwel-lacha-ab-400.webp" },
  ];
  

  let cart = [];

function renderProducts() {
  const catalog = document.getElementById("catalog");
  catalog.innerHTML = "";

  const search = document.getElementById("searchInput").value.toLowerCase();
  const type = document.getElementById("typeFilter").value;
  const brand = document.getElementById("brandFilter").value;

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search) &&
    (type ? p.type === type : true) &&
    (brand ? p.brand === brand : true)
  );

  if (filtered.length === 0) {
    catalog.innerHTML = "<p>Товары не найдены</p>";
    return;
  }

  filtered.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.img}" alt="${product.name}" />
      <h4>${product.name}</h4>
      <p>Цена: ${product.price} ₽</p>
      <button onclick="addToCart('${product.name}')">Добавить в корзину</button>
    `;
    catalog.appendChild(card);
  });
}

function filterProducts() {
  renderProducts();
}

function addToCart(name) {
  const product = products.find(p => p.name === name);
  cart.push(product);
  updateCartCount();
}

function updateCartCount() {
  document.getElementById("cartCount").textContent = cart.length;
}

function toggleCart() {
  const cartSection = document.getElementById("cart");
  const isOpen = cartSection.style.display === "block";
  cartSection.style.display = isOpen ? "none" : "block";
  if (!isOpen) renderCart();
}

function renderCart() {
    const cartItems = document.getElementById("cartItems");
    cartItems.innerHTML = "";
  
    let total = 0;
    cart.forEach((item, index) => {
      total += item.price;
      const li = document.createElement("li");
      li.innerHTML = `
        ${item.name} — ${item.price} ₽
        <button onclick="removeFromCart(${index})" style="margin-left: 10px; background: red;">Удалить</button>
      `;
      cartItems.appendChild(li);
    });
  
    document.getElementById("cartTotal").textContent = total;
}
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
    renderCart();
}

function checkout() {
  document.getElementById("order-form").style.display = "block";
  window.scrollTo({ top: document.getElementById("order-form").offsetTop, behavior: "smooth" });
}

function submitForm(event) {
  event.preventDefault();
  alert("Спасибо за заказ! Мы скоро с вами свяжемся.");
  cart = [];
  updateCartCount();
  renderCart();
  document.getElementById("order-form").style.display = "none"
}
function submitForm(event) {
    event.preventDefault();
  
    const name = document.querySelector('#order-form input[type="text"]').value;
    const phone = document.querySelector('#order-form input[type="tel"]').value;
  
    const message = `Новый заказ!\nИмя: ${name}\nТелефон: ${phone}\nТовары:\n` +
      cart.map(item => `${item.name} — ${item.price}₽`).join("\n");
  
    // Замените на свой токен и ID чата
    const token = "7788979502:AAHrC-Hf04jCQYOxKHrv_Hb1cah0ttyNjHI";
    const chat_id = "1031391442";
  
    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id, text: message })
    })
    .then(() => {
      alert("Спасибо за заказ! Мы скоро с вами свяжемся.");
      cart = [];
      updateCartCount();
      renderCart();
      document.getElementById("order-form").style.display = "none";
    })
    .catch(err => {
      alert("Ошибка при отправке. Попробуйте ещё раз.");
      console.error(err);
    });
  }