function isEligibleForJob(age, experience, qualification){
    if(age>=21 && age<=55 && experience>=2 && qualification=="Bachelors Degree"){
        return "Applicant is eligible";
    }
    else{
        return "Applicant is not eligible";
    }
}
console.log(isEligibleForJob(25,3,"Bachelors Degree"));
console.log(isEligibleForJob(18, 0, "Bachelors Degree")); 
console.log(isEligibleForJob(40, 5, "Masters Degree")); 