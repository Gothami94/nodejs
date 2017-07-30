function placeOrder(orderNumber) {

    console.log("This is order "+ orderNumber);

    deliverOrder(function () {
        console.log("Order "+orderNumber+ " delivered");
    });

}

function deliverOrder(orderNumber) {

    setTimeout(orderNumber,5000);
}

placeOrder(1);
placeOrder(2);
placeOrder(3);
placeOrder(4);