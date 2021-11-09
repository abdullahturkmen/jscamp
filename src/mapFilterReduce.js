let cart = [
    {id: 1, productName: "Telefon", quantity: 3, unitPrice: 4000},
    {id: 2, productName: "Kitap", quantity: 34, unitPrice: 3000},
    {id: 3, productName: "Kahve", quantity: 32, unitPrice: 200},
    {id: 4, productName: "Bilgisayar", quantity: 15, unitPrice: 4120},
    {id: 5, productName: "Kalem", quantity: 2, unitPrice: 24000},
    {id: 6, productName: "Kılıf", quantity: 10, unitPrice: 2340},
    {id: 7, productName: "Tripod", quantity: 5, unitPrice: 420},
]



cart.map(product => console.log(product.productName));


console.log('<ul>');
cart.map(product => {
    console.log("<li>" + product.productName + " toplam fiyat : " + product.unitPrice * product.quantity + "</li>");
});
console.log('</ul>');



console.log("---------");

let total = cart.reduce((acc, product) => acc+ product.unitPrice * product.quantity, 0);
console.log(total);


console.log("---------");

let quantityOver2 = cart.filter(product => product.quantity > 2);

console.log(quantityOver2);

console.log("---------");


function addToCart(sepet) {
    sepet.push({id: 8, productName: "Ruhsat", quantity: 1, unitPrice: 20})
}

addToCart(cart);

console.log(cart);


let sayi = 10;

function sayiTopla(number) {
    number += 1;
}

sayiTopla(sayi);

console.log(sayi);