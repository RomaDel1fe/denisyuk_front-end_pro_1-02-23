document.addEventListener("DOMContentLoaded", () => {
  // Shop
  const categories = [
    { id: 1, name: "Електроніка" },
    { id: 2, name: "Одяг" },
    { id: 3, name: "Харчові продукти" },
  ];

  const products = [
    {
      id: 1,
      categoryId: 1,
      name: "Навушники",
      description: "Навушники з відмінним звуком",
    },
    {
      id: 2,
      categoryId: 1,
      name: "Телефон",
      description: "Смартфон з великим екраном",
    },
    {
      id: 3,
      categoryId: 2,
      name: "Светр",
      description: "Теплий зимовий светр",
    },
    {
      id: 4,
      categoryId: 2,
      name: "Джинси",
      description: "Стійкі до зносу джинси",
    },
    { id: 5, categoryId: 3, name: "Хліб", description: "Смачний свіжий хліб" },
    { id: 6, categoryId: 3, name: "Молоко", description: "Органічне молоко" },
  ];

  const categoriesContainer = document.querySelector(".categories");
  const productsContainer = document.querySelector(".products");
  const productDetailsContainer = document.querySelector(".product-details");
  const orderFormContainer = document.querySelector(".order-form");

  function createButton(text, clickHandler) {
    const buttonElement = document.createElement("button");
    buttonElement.textContent = text;
    buttonElement.addEventListener("click", clickHandler);
    return buttonElement;
  }
  
  function appendElement(parent, elementType, text, clickHandler) {
    const element = document.createElement(elementType);
    element.textContent = text;
    if (clickHandler) {
      element.addEventListener("click", clickHandler);
    }
    parent.appendChild(element);
    return element;
  }
  
  function clearElement(element) {
    element.innerHTML = "";
  }
  

  function showCategories() {
    clearElement(categoriesContainer);
    clearElement(productsContainer);
    productsContainer.classList.remove('hide');
    clearElement(productDetailsContainer);
    
    categories.forEach((category) => {
      categoriesContainer.appendChild(createButton(category.name, () => showProducts(category.id)));
    });
  
    const myOrdersButton = document.getElementById('myOrders');
    myOrdersButton.textContent = 'Мої Замовлення';
    myOrdersButton.removeEventListener('click', showCategories);
    myOrdersButton.addEventListener('click', showOrders);
  }

  function showProducts(categoryId) {
    productsContainer.innerHTML = "";
    productDetailsContainer.innerHTML = "";

    products
      .filter((product) => product.categoryId === categoryId)
      .forEach((product) => {
        const productElement = document.createElement("button");
        productElement.textContent = product.name;
        productElement.addEventListener("click", () =>
          showProductDetails(product.id)
        );
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

  function saveOrderToLocalStorage(order) {
    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));
  }

  function showOrderForm(product) {
    fetch("/components/form.html")
      .then((response) => response.text())
      .then((data) => {
        orderFormContainer.innerHTML = data;

        document.getElementById("orderForm").addEventListener("submit", (e) => {
          e.preventDefault();

          const buyerName = document.getElementById("buyerName").value;
          const city = document.getElementById("city").value;
          const newPostOffice = document.getElementById("newPostOffice").value;
          const productQuantity =
            document.getElementById("productQuantity").value;
          const orderComments = document.getElementById("orderComments").value;

          if (buyerName && city && newPostOffice && productQuantity) {
            const message = `<span>Замовлено ${productQuantity} одиниць товару"${product.name}".</span>
              <span>Доставка в місто ${city}, на склад №${newPostOffice}.</span>
              <span>Коментар до замовлення: ${orderComments}</span>`;
            orderFormContainer.innerHTML = `<p class="message">${message}</p>`;
            productsContainer.innerHTML = "";
            productDetailsContainer.innerHTML = "";
            saveOrderToLocalStorage({
              name: buyerName,
              city,
              postOffice: newPostOffice,
              quantity: productQuantity,
              comments: orderComments,
              product,
              date: new Date(),
              id: Date.now(),
            });
          } else {
            alert("Будь ласка, заповніть всі обов’язкові поля.");
          }
        });
      });
  }

  function showOrders() {
    categoriesContainer.innerHTML = "";
    productsContainer.innerHTML = "";
    productsContainer.classList.add('hide');
  
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    
    orders.forEach((order) => {
      const orderElement = document.createElement("button");
      orderElement.textContent = `Замовлення від ${new Date(order.date).toLocaleDateString()}`;
      orderElement.addEventListener("click", () => showOrderDetails(order));
      categoriesContainer.appendChild(orderElement);
    });
  
    // Зміна тексту кнопки
    const myOrdersButton = document.getElementById('myOrders');
    myOrdersButton.textContent = 'Магазин';
    myOrdersButton.removeEventListener('click', showOrders);
    myOrdersButton.addEventListener('click', showCategories);
  }
  
  function showOrderDetails(order) {
    clearElement(productDetailsContainer);
    
    appendElement(productDetailsContainer, "p",
      `Ім'я покупця: ${order.name}\n` +
      `Місто: ${order.city}\n` +
      `Відділення Нової Пошти: ${order.postOffice}\n` +
      `Кількість товару: ${order.quantity}\n` +
      `Коментарі: ${order.comments}\n` +
      `Товар: ${order.product.name}, ${order.product.description}`);
  
    productDetailsContainer.appendChild(createButton("Видалити замовлення", () => deleteOrder(order.id)));
  }
  
  function deleteOrder(orderId) {
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders = orders.filter(order => order.id !== orderId);
    localStorage.setItem('orders', JSON.stringify(orders));
    productDetailsContainer.innerHTML = "";
    showOrders();
  }
  
  document.getElementById('myOrders').addEventListener('click', showOrders);
  
  showCategories();
});
