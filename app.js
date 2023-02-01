const productForm = document.getElementById("add-product");
const allProductDiv = document.getElementById("all-product");
const productNameInput = document.getElementById("product-name");
const productImageInput = document.getElementById("product-image");
const productPriceInput = document.getElementById("product-price");
const productTextInput = document.getElementById("product-text");

const products = JSON.parse(localStorage.getItem("lsProducts")) || [];

// Add Product

const addProduct = (nameValue, imageValue, priceValue, textValue) => {
  products.push({
    image: imageValue,
    price: priceValue,
    name: nameValue,
    text: textValue,
  });

  // Add Products localstoreg
  localStorage.setItem("lsProducts", JSON.stringify(products));
};

// Create Element

const createElement = (nameValue, imageValue, priceValue, textValue) => {
  // Create col
  const productCol = document.createElement("div");
  productCol.classList.add("col-lg-3");

  // Create single product div

  const productDiv = document.createElement("div");
  productDiv.classList.add("single-product");

  // Create single product image

  const productImage = document.createElement("img");
  productImage.setAttribute("src", imageValue);

  // Create single product prise

  const productPrice = document.createElement("h5");
  productPrice.innerText = priceValue;

  // Create single product name

  const productName = document.createElement("h3");
  productName.innerText = nameValue;

  // Create single product Text

  const productText = document.createElement("p");
  productText.innerText = textValue;

  //  Completed single Product
  productDiv.append(productImage, productPrice, productName, productText);

  // Completed col

  productCol.appendChild(productDiv);

  //  Complete First Task

  allProductDiv.appendChild(productCol);
};

productForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const nameValue = productNameInput.value;
  const imageValue = productImageInput.value;
  const priceValue = productPriceInput.value;
  const textValue = productTextInput.value;

  // Task one
  createElement(nameValue, imageValue, priceValue, textValue);

  // Task Two
  addProduct(nameValue, imageValue, priceValue, textValue);

  // // Task (3)
  // products.forEach(product=>{

  // })
});

// Show Product Form Local Storeg
products.forEach((product) => {
  createElement(
    product["name"],
    product["image"],
    product["price"],
    product["text"]
  );
});