
var productNameInput = document.getElementById("productNameInput");
var productPriceInput = document.getElementById("productPriceInput");
var productcategoryInput = document.getElementById("productcategoryInput");
var productDescerptionInput = document.getElementById("productDescerptionInput");
var productNameAlert = document.getElementById("productNameAlert");
var productList=[];

if (localStorage.getItem("ourProducts") == null) {
    productList = [];
}
else
{
    productList =JSON.parse(localStorage.getItem("ourProducts"));
    displayProduct();
}
function validateProductName() {
    var regx = [/^[A-Z][a-z]{3,8}$/];
    if (regx.test(productNameInput.value) == true) {
        productNameAlert.classList.replace("d-block" , "d-none");
        productNameInput.classList.add("is-valid");
        productNameInput.classList.remove("is-invalid");

    }
    else{
        productNameAlert.classList.replace("d-none" , "d-block");
        productNameInput.classList.add("is-valid");
        productNameInput.classList.remove("is-invalid");
    }
}
productNameInput.addEventListener("blur",validateProductName)
function addProduct() {
    product={
        name:productNameInput.value,
        price:productPriceInput.value,
        category:productcategoryInput.value,
        desc:productDescerptionInput.value,
    }
    productList.push(product);
    localStorage.setItem("ourProducts" , JSON.stringify(productList));
    displayProduct();
    clearProduct();
}


function displayProduct() {
    cartona='';
    for (let i = 0; i < productList.length; i++) {
        cartona+=`
        <tr>
        <td>${i}</td>
        <td>${productList[i].name}</td>
        <td>${productList[i].price}</td>
        <td>${productList[i].category}</td>
        <td>${productList[i].desc}</td>
        <td><button class="btn btn-warning rounded">Updat</button>
        </td>
        <td><button onclick='deleteProduct()' class="btn btn-danger rounded">Delete</button></td>
    </tr>
        `
        
    }
    document.getElementById("tbody").innerHTML = cartona;
}

function clearProduct() {
    productNameInput.value ='';
    productPriceInput.value ='';
    productcategoryInput.value='';
    productDescerptionInput.value='';
}
function deleteProduct(index) {
    productList.splice(index,1);
    localStorage.setItem("ourProducts" , JSON.stringify(productList));
    displayProduct();
}
function searchProduct() {
    term= searchInput.value;
    wantedProduct = [];
    for (let i = 0; i < productList.length; i++) {
        if (productList[i].name.toLowerCase().include) {
            wantedProduct.push(productList)
        }
        
    }
}

