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

document.addEventListener('DOMContentLoaded', async() => {
  const data = await getData(url);
  const listProducts = document.querySelector('.products');
  data.forEach(element => {
    listProducts.insertAdjacentHTML('beforeend', `
      <div class="product">
      <div class="${element.class}">
					<div class="shadowProduct hiddenshadowProduct">
						<div class="btnProduct">
							<button><img src="./img/forma_product.svg" alt="formaProduct" />Add to Cart</button>
						</div>
					</div>
				</div>
				<div class="prodInfo">
					<h1>${element.h1}</h1>
					<p> ${element.p}</p>
					<h2>${element.price}</h2>
				</div>
      `)
  });
})