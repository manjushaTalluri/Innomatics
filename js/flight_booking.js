function calculateFlightFare(classType, luggageWeight, isStudent, isSenior){
   let base_fare=300;
   let additional_charge=0;
   if (classType === "Business") {
    additional_charge += 200;
} else if (classType === "First") {
    additional_charge += 500;
}
if (luggageWeight > 20) {
    additional_charge += Math.ceil((luggageWeight - 20) / 10) * 50;
}
let totalFare = base_fare + additional_charge;
if (isStudent) {
    totalFare *= 0.85; 
} else if (isSenior) {
    totalFare *= 0.90; 
}

return `Final price: $${totalFare.toFixed(2)}`;

}
console.log(calculateFlightFare("Business", 25, false, false)); 
console.log(calculateFlightFare("First", 35, true, false));