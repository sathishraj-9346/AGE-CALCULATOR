
const btnEl = document.getElementById("btn");
const birthdayE1 = document.getElementById("birthday");
const resultEl = document.getElementById("result")


function calculateAge()
{
    const birthdayValue = birthdayE1.value;
    if(birthdayValue === ""){
        alert("Please enter your birthday")
    }else{
        const age=getAge(birthdayValue);
        resultEl.innerText= `Your age is ${age} ${age > 1 ? "years" : "year"} old `;
    }

}

function getAge(birthdayValue){
    const currentDate = new Date();
    const birthDate = new Date(birthdayValue)
    let age = currentDate.getFullYear()-birthDate.getFullYear();
    const month = currentDate.getMonth()-birthDate.getMonth();

    if(month<0 || (month ===0 && currentDate.getDate() < birthDate.getDate())){
        age--;
    }

    return age;
}

btnEl.addEventListener("click",calculateAge)