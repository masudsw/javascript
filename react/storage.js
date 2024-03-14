const ul = document.getElementById('ulID');
let productName = document.getElementById('txtProductName');
let productQuantity = document.getElementById('txtQuantity');
const button = document.getElementById('btnAddToCart');
let productInfo = {};
button.addEventListener('click', () => {
    const name = productName.value;
    const quantity = productQuantity.value;
    displayProducts(name, quantity)
    saveProductToLocalStorage(name, quantity);

    productName.value = '';
    productQuantity.value = '';
    
})
const displayProducts = (name, quantity) => {
    let li = document.createElement('li');
    li.innerText = `${name}  :  ${quantity}`;
    ul.appendChild(li);
}

const getStoredProduct = () => {
    let product = {};
    const storedProduct = localStorage.getItem('product');
    if (storedProduct)
        product = JSON.parse(storedProduct);
    return product;
}

const saveProductToLocalStorage = (product, quantity) => {
    const storedProduct = getStoredProduct();
    console.log(storedProduct);
    storedProduct[product] = quantity;
    storedProductStrigified = JSON.stringify(storedProduct);
    localStorage.setItem('product', storedProductStrigified);
}

const getProductFromLocalStorage = () => {
    const storedProducts = getStoredProduct();
    for (const storedProduct in storedProducts)
        // console.log(storedProduct, storedProducts[storedProduct]);
        displayProducts(storedProduct, storedProducts[storedProduct]);
}

getProductFromLocalStorage();
