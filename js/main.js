document.addEventListener('DOMContentLoaded', () => {
  // Shop
  const categories = [
    { id: 1, name: "Електроніка" },
    { id: 2, name: "Одяг" },
    { id: 3, name: "Харчові продукти" },
  ];

  const products = [
    { id: 1, categoryId: 1, name: "Навушники", description: "Навушники з відмінним звуком" },
    { id: 2, categoryId: 1, name: "Телефон", description: "Смартфон з великим екраном" },
    { id: 3, categoryId: 2, name: "Светр", description: "Теплий зимовий светр" },
    { id: 4, categoryId: 2, name: "Джинси", description: "Стійкі до зносу джинси" },
    { id: 5, categoryId: 3, name: "Хліб", description: "Смачний свіжий хліб" },
    { id: 6, categoryId: 3, name: "Молоко", description: "Органічне молоко" },
  ];

  const categoriesContainer = document.querySelector(".categories");
  const productsContainer = document.querySelector(".products");
  const productDetailsContainer = document.querySelector(".product-details");
  const orderFormContainer = document.querySelector(".order-form");

  function showCategories() {
    categories.forEach((category) => {
      const categoryElement = document.createElement("button");
      categoryElement.textContent = category.name;
      categoryElement.addEventListener("click", () => showProducts(category.id));
      categoriesContainer.appendChild(categoryElement);
    });
  }

  function showProducts(categoryId) {
    productsContainer.innerHTML = "";
    productDetailsContainer.innerHTML = "";

    products
      .filter((product) => product.categoryId === categoryId)
      .forEach((product) => {
        const productElement = document.createElement("button");
        productElement.textContent = product.name;
        productElement.addEventListener("click", () => showProductDetails(product.id));
        productsContainer.appendChild(productElement);
      });
  }

  function showProductDetails(productId) {
    productDetailsContainer.innerHTML = "";
    orderFormContainer.innerHTML = "";

    const product = products.find((p) => p.id === productId);

    const productName = document.createElement("h2");
    productName.textContent = product.name;
    productDetailsContainer.appendChild(productName);

    const productDescription = document.createElement("p");
    productDescription.textContent = product.description;
    productDetailsContainer.appendChild(productDescription);

    const buyButton = document.createElement("button");
    buyButton.textContent = "Купити";
    buyButton.addEventListener("click", () => showOrderForm(product));
    productDetailsContainer.appendChild(buyButton);
  }

  function showOrderForm(product) {
    fetch('/components/form.html')
      .then(response => response.text())
      .then(data => {
        orderFormContainer.innerHTML = data;
  
        document.getElementById('orderForm').addEventListener('submit', (e) => {
          e.preventDefault();
  
          const buyerName = document.getElementById('buyerName').value;
          const city = document.getElementById('city').value;
          const newPostOffice = document.getElementById('newPostOffice').value;
          const productQuantity = document.getElementById('productQuantity').value;
          const orderComments = document.getElementById('orderComments').value;
  
          if (buyerName && city && newPostOffice && productQuantity) {
            const message = `<span>Замовлено ${productQuantity} одиниць товару"${product.name}".</span>
              <span>Доставка в місто ${city}, на склад №${newPostOffice}.</span>
              <span>Коментар до замовлення: ${orderComments}</span>`;
            orderFormContainer.innerHTML = `<p class="message">${message}</p>`;
            productsContainer.innerHTML = "";
            productDetailsContainer.innerHTML = "";
          } else {
            alert('Будь ласка, заповніть всі обов’язкові поля.');
          }
        });
      });
  }  
  showCategories();
});
