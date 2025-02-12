const cart = ['shoe', 'football', 'jersey'];

//createOrder
//proceedToPayment
//orderSummary
//updateWallet

createOrder(cart)
    .then(function (orderId) {
        console.log(orderId)
        return orderId
    })
    .catch(function (err) {
        console.log(err.message)
    })
    .then(function (orderId) {
        return proceedToPayment(orderId)
    })
    .then(function (paymentInfo) {
        console.log(paymentInfo)
    })
    .catch(function () {
        console.log('payment failed')
    })
    .then(function () {
        return orderSummary(cart)
    })
    .then(function (cartItems) {
        console.log(`${cartItems} will be delivered within 2 days`)
    })
    .catch(function (err) {
        console.log('order didn\'t generated')
    })
    .then(function (){
        return updateWallet()
    })
    .then(function(walletInfo){
        console.log(walletInfo)
    })


// step1: createOrder
function createOrder(cart) {
    const promise = new Promise(function (resolve, reject) {
        if (!validateCart(cart)) {
            const err = new Error("cart is not valid")
            reject(err)
        }
        const orderId = '12345'
        if (validateCart(cart)) {
            setTimeout(function () {
                resolve(orderId)

            }, 3000)
        }
    })
    return promise
}

function validateCart(cart) {
    return true;
}

//step:2 paymentProccess
function proceedToPayment(orderId) {
    return new Promise(function (resolve, reject) {
        resolve('payment successful')
    })
}

//step:3 orderSummary
function orderSummary(cartItems) {
    return new Promise(function (resolve, reject) {
        resolve(cartItems)
    })
}
//step:4 updateWallet
function updateWallet(){
    return new Promise(function (resolve, reject){
        resolve('wallet amount deducted')
    })
}