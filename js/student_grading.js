function calculateGrade(marks, attendance){
    if(attendance>90){
        marks+=5;
    }
    if(marks>=90){
        return "A";
    }
    else if(marks>=80 && marks<=89){
        return "B";
    }
    else if(marks>=70 && marks<=79){
        return "C";
    }
    else if(marks>=60 && marks<=69){
        return "D";
    }
    else if(marks<60){
        return "F";
    }
}
console.log(calculateGrade(87,95));