function calculateFinalAmount(orderAmount){
    let shipping=0;
    let discount=0;
    if(orderAmount>1000){
        discount=(orderAmount*20)/100;
    }
    if(orderAmount>=500 && orderAmount<=1000 ){
        discount=(orderAmount*10)/100;
    }
    if(orderAmount<500){
        discount=0;
    }
    if(orderAmount<50){
        shipping=10;
    }
    return orderAmount-discount+shipping;
}
console.log(calculateFinalAmount(5000));