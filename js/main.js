document.addEventListener('DOMContentLoaded', () => {
  // Emoji
  const emojiContainer = document.querySelector('.emoji-container');
  const emojis = ['😀', '😁', '😂', '🤣', '😃'];
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

  // Emoji
  function createEmojiElement(emoji) {
    const emojiElement = document.createElement('span');
    emojiElement.classList.add('emoji', 'noselect');
    emojiElement.textContent = emoji;
    return emojiElement;
  }

  function createCounterElement() {
    const counterElement = document.createElement('span');
    counterElement.classList.add('counter', 'noselect');
    counterElement.textContent = '0';
    return counterElement;
  }

  function handleEmojiClick(emojiWrapper) {
    const counter = emojiWrapper.querySelector('.counter');
    counter.textContent = parseInt(counter.textContent) + 1;
  }

  emojis.forEach(emoji => {
    const emojiWrapper = document.createElement('div');
    emojiWrapper.classList.add('emoji-wrapper');

    const emojiElement = createEmojiElement(emoji);
    const counterElement = createCounterElement();

    emojiWrapper.appendChild(emojiElement);
    emojiWrapper.appendChild(counterElement);

    emojiWrapper.addEventListener('click', () => handleEmojiClick(emojiWrapper));

    emojiContainer.appendChild(emojiWrapper);
  });

  // Shop
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

    const product = products.find((p) => p.id === productId);

    const productName = document.createElement("h2");
    productName.textContent = product.name;
    productDetailsContainer.appendChild(productName);

    const productDescription = document.createElement("p");
    productDescription.textContent = product.description;
    productDetailsContainer.appendChild(productDescription);

    const buyButton = document.createElement("button");
    buyButton.textContent = "Купити";
    buyButton.addEventListener("click", () => {
      alert(`Товар "${product.name}" куплено!`);
      productsContainer.innerHTML = "";
      productDetailsContainer.innerHTML = "";
    });
    productDetailsContainer.appendChild(buyButton);
  }

  showCategories();
});
