/*
createOrder,
proceedToPayment,
showOderSummary,
updateWallet
*/

// [Shoes, pants, kurta] are added to cart

const cart = ['shoes', 'pants', 'kurta'];

let balance = 3000;

createOrder(cart)
.then(function (orderId){
    console.log("Order ID is : ",orderId)
    return orderId;
})
.then(function(orderId){
    return proceedToPayment(orderId);
})
.then(function({message, amt}){
    console.log(`${message} of amount: `, amt);
    return showOrderSummary(message, amt);
})
.then(function({message, amt}){
    console.log("Your wallet has been debited by : ", amt);
})
.catch(function(err){
    console.log(err.message);
})
.then(function(){
    console.log("No matter what, I will get executed - Even if there is error");
    
})

function validateCart(){
    return true;
}

function createOrder(cart){
    let pr = new Promise(function (resolve, reject){
        if(!validateCart(cart)) {
            const err = new Error("Cart is not valid!");
            reject(err);
        }
        let orderId = Math.floor(Math.random()*10000)
        if(orderId){
            setTimeout(function() {
                resolve(orderId);
            },0)
        }
    });
    return pr;
}

function proceedToPayment(orderId){
    return new Promise(function(resolve,reject){
        resolve({mesage : `Payment Successful for order id : ${orderId}`, amt : 2500});
    })
}

function showOrderSummary(paymentInfo, amt){
    return new Promise(function(resolve, reject){
        if(amt >= 2000){
            resolve({ message : "You have ordered items that cost ${amt}", amt});
        }
        else{
            reject(new Error("Please buy more for discount"));
        }
    })
}

// function cartBill(){
//     let sum = cart.reduce((a,b) => a+b, 0);
//     return balance -= sum;

    
// }
// console.log(cartBill())