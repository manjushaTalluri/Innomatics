function choosePlan(planType, wantsTrainer, wantsDietPlan){
    if (planType === "VIP" || (wantsTrainer && wantsDietPlan)) {
        return "VIP Plan: $80/month (Gym + Trainer + Diet Plan)";
    } else if (planType === "Premium" || wantsTrainer) {
        return "Premium Plan: $50/month (Gym + Personal Trainer)";
    } else {
        return "Basic Plan: $20/month (Gym Access Only)";
    }
}
console.log(choosePlan("Basic", false, false)); 
console.log(choosePlan("Premium", true, false)); 
console.log(choosePlan("VIP", true, true)); 