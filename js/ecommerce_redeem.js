function applyCoupon(orderAmount, couponCode){
    let finalPrice = orderAmount;

    if (couponCode === "DISCOUNT10") {
        if (orderAmount > 500) {
            finalPrice = orderAmount - (orderAmount * 0.10); 
        } else {
            return "Coupon DISCOUNT10 is not applicable for orders below $500.";
        }
    } else if (couponCode === "FREESHIP") {
        if (orderAmount > 200) {
            return `Free shipping applied! Final price is $${finalPrice.toFixed(2)}.`;
        } else {
            return "Coupon FREESHIP is not applicable for orders below $200.";
        }
    } else if (couponCode) {
        return "Invalid coupon code.";
    }

    return `Final price after applying ${couponCode}: $${finalPrice.toFixed(2)}.`;
}
console.log(applyCoupon(900,"DISCOUNT10"));