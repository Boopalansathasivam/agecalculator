function calculateage(){
    const A=document.getElementById("a1").value;
     const dobdate=new Date(A)

    const B=document.getElementById("a2").value
    const currentdate=new Date(B)


     let age=currentdate.getFullYear()-dobdate.getFullYear()
     const  mondif=currentdate.getMonth()-dobdate.getMonth()
     const daydif=currentdate.getDate()-dobdate.getDate()

     if(mondif<0||(mondif===0&&daydif<0)){
        age--
     }

     document.getElementById("a3").innerHTML="As per today date you are"+" "+age+" "+"year old";


}




// function calculateAge() {

    // const dob = document.getElementById("dob").value;
    // const dobDate = new Date(dob);


    // const currentDate = new Date();


    // let age = currentDate.getFullYear() - dobDate.getFullYear();
    // const monthDifference = currentDate.getMonth() - dobDate.getMonth();
    // const dayDifference = currentDate.getDate() - dobDate.getDate();


    // if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    //     age--;
    // }


//     document.getElementById("ageResult").innerText = `Your age is ${age} years.`;
// }