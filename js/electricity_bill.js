function calculateElectricityBill(units, timeOfDay){
    
    if(timeOfDay>=8 && timeOfDay<=20)
    {
        if(units<100){
            return units*5;
        }
        else if(units>=100 && units<=300){
            return units*4;
        }
        else if(units>300){
            return units*3;
        }
    }
    else if(timeOfDay>=1 && timeOfDay<8 || (timeOfDay>20 && timeOfDay<=24)){
        
        if(units<100){
            return (units*5)+((units*5)*0.1);
        }
        else if(units>=100 && units<=300){
            return (units*4)+((units*4)*0.1);
        }
        else if(units>300){
            return (units*3)+((units*3)*0.1);
        }
        
    }
}
console.log(calculateElectricityBill(250,9));
console.log(calculateElectricityBill(400,24));