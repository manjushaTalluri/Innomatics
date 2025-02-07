function calculateTicketPrice(age, showTime) {
    const standard_price = 12;
    let discount = 0;
    if (age < 12) {
        discount = 0.40;

    }
    else if (age > 60) {
        discount = 0.30;
    }
    else if (showTime < 17) {
        discount = 0.20;
    }

    const finalPrice = standard_price * (1 - discount);
    return `Total Price is: ${finalPrice.toFixed(2)}`

}
console.log(calculateTicketPrice(70,15));
