const url = './data.json';

async function getData(url) {
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error.message);
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  if (window.location.pathname.includes('index.html')) {
    const data = await getData(url);
    const listProducts = document.querySelector('.products');
    data.forEach(element => {
      listProducts.insertAdjacentHTML('beforeend', `
        <div class="product">
          <div class="${element.class}">
            <div class="shadowProduct hiddenshadowProduct">
              <div class="btnProduct">
                <button class="addToCart" data-image="${element.class}" data-name="${element.h1}" data-price="${element.price}">
                  <img src="./img/forma_product.svg" alt="formaProduct" />Add to Cart
                </button>
              </div>
            </div>
          </div>
          <div class="prodInfo">
            <h1>${element.h1}</h1>
            <p>${element.p}</p>
            <h2>${element.price}</h2>
          </div>
        </div>
      `);
    });
    addToCartButtons();
  }

  if (window.location.pathname.includes('cart.html')) {
    displayCarts();
    removeCart()
    mainCartButtons();
  }

  updateCounter();
});

function addToCartButtons() {
  const addToCartButtons = document.querySelectorAll('.addToCart');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      const product = {
        image: button.getAttribute('data-image'),
        name: button.getAttribute('data-name'),
        price: button.getAttribute('data-price'),
        quantity: 1
      };
      addToCart(product);
    });
  });
}

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  const existingProductIndex = cart.findIndex(item => item.name === product.name);
  if (existingProductIndex >= 0) {
    cart[existingProductIndex].quantity += 1;
  } else {
    cart.push(product);
  }

  localStorage.setItem('cart', JSON.stringify(cart));

  updateCounter();
}

function updateCounter() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const total = cart.reduce((sum, item) => sum + item.quantity, 0);

  const cartCounter = document.querySelector('.cart-counter');
  if (cartCounter) {
    if (total > 0) {
      cartCounter.textContent = total;
      cartCounter.classList.remove('hiddenCart-counter');
    } else {
      cartCounter.textContent = '';
      cartCounter.classList.add('hiddenCart-counter');
    }
  }
}


function displayCarts() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartContainer = document.querySelector('.productsCart__part1');

  cartContainer.innerHTML = '';

  cart.forEach((product, index) => {
    cartContainer.insertAdjacentHTML("beforeend", `
      <div class="productsCart__box" data-index="${index}">
        <div class="${product.image} size-cart"></div>
        <div class="productsCart__price">
          <div class="productsCart__main">
            <div class="productsCart__main_size">
              <h1>${product.name}</h1>
            </div>
            <svg class="productsCart__main_svg" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z" fill="#575757"/>
            </svg>
          </div>
          <h2>Price: <span style="color: #ef5b70">${product.price}</span></h2>
          <h2 class="productsCart__main_marging-left">Color: Red</h2>
          <h2 class="productsCart__main_marging-left">Size: Xl</h2>
          <h2 class="productsCart__main_marging-left productsCart__quantity_marging">
            Quantity: <input class="productsCart__quantity" type="number" value="${product.quantity}" />
          </h2>
        </div>
      </div>
    `);
  });
  // removeCart(); если привязываемся к каждому элементу .productsCart__main_svg
}

function removeCart() {
  //   const closeButtons = document.querySelectorAll('.productsCart__main_svg') //нужно вызывать removeCart после каждого добавления новых элементов (function displayCarts() внутри removeCart();)
  //   closeButtons.forEach(svg => {
  //     svg.addEventListener('click', () => {
  //       const box = svg.closest('.productsCart__box');
  //       const index = box.dataset.index;
  //       removeBasket(index);
  //     });
  //   });
  // }
  const cartContainer = document.querySelector('.productsCart__part1'); //делегирование событий
  cartContainer.addEventListener('click', (e) => {
    if (e.target.closest('.productsCart__main_svg')) {
      const box = e.target.closest('.productsCart__box');
      if (box) {
        const index = box.getAttribute('data-index');
        removeBasket(index)
      }; //   если box.remove(); // удаление только из DOM
    }
  })
};


function removeBasket(index) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  if (index >= 0 && index < cart.length) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCarts();
    updateCounter();
  }
}


function mainCartButtons() {
  const clearCartButton = document.querySelector('.productsCart__mainButtons_left');
  const continueShoppingButton = document.querySelector('.productsCart__mainButtons_right');

  if (clearCartButton) {
    clearCartButton.addEventListener('click', () => {
      localStorage.removeItem('cart');
      displayCarts();
      updateCounter();
    });
  }

  if (continueShoppingButton) {
    continueShoppingButton.addEventListener('click', () => {
      window.location.href = 'index.html';
    });
  }
}