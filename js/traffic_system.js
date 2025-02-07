function trafficLightControl(density){
    if(density=="Heavy Traffic"){
        return " Green for 60 seconds";
    }
    else if(density=="Moderate Traffic"){
        return "Green for 40 seconds";
    }
    else if(density=="Light Traffic" ){
        return " Green for 20 seconds";
    }
    else return 0;
}
console.log(trafficLightControl("Moderate Traffic"));
console.log(trafficLightControl("Light Traffic"));