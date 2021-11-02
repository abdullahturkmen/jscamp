

let sayHello = () => {
    console.log("hello world");
}

sayHello();


let productDetail = {productName: "Elma", unitPrice: 5, quantity: 10}

function addToCart(product) {
    console.log(productDetail.productName);
}

 addToCart(productDetail);


 function addToCartNew(x) {
     console.log(x);
 }

 let products = [
    {productName: "Yumurta", unitPrice: 12, quantity: 20},
    {productName: "Armut", unitPrice: 15, quantity: 5},
    {productName: "Şeftali", unitPrice: 20, quantity: 10},
 ]

 addToCartNew(products);


function addNumber(...numbers) {
    for(let i = 0; i < numbers.length; i++){
        console.log(numbers[i])
    }
  
}

addNumber(10, 20);
addNumber(15, 30, 60);
addNumber(7, 14, 21, 28);


let [icAnadolu,marmara, karadeniz, [icAnadoluSehirler]] = [
    {name: "İç Anadolu", population: "20M"},
    {name: "Marmara", population: "25M"},
    {name: "Karadeniz", population: "15M"},
    [
        ["konya", "ankara"],
        ["istanbul", "edirne"],
        ["rize", "trabzon"],
    ]
]

console.log(icAnadolu.name);
console.log(icAnadoluSehirler);