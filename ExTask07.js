// Imagine you are building a simple shopping cart system. Perform the following tasks:

// Create an array called cart that holds product objects. Each product should have name, price, and quantity properties.
// Add a new product to the cart.
// Remove a product by its name.
// Update the quantity of a specific product.
// Calculate the total price of the products in the cart using reduce().

const cart=[
    {name:"Book", price: 500, quantity:100},
    {name:"Pen", price:10, quantity:500},
    {name:"Pencil", price:20, quantity:500}
]

console.log(cart);

cart.push({name:"Eraser", price:5, quantity:200})
console.log(cart);

cart.splice(1,1,);
console.log(cart);


cart[2].quantity=250
console.log(cart);


//last er tai price * quantity hobe
cart[0].totalprice= cart[0].price*cart[0].quantity
cart[1].totalprice= cart[1].price*cart[1].quantity
cart[2].totalprice= cart[2].price*cart[2].quantity

console.log(cart);

let total=cart.reduce((acc,items)=>acc+items.totalprice,0);
console.log("Total price for all:"+total);
