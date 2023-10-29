const btnE1 = document.getElementById("btn");
const birthdayE1 = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function calculateAge() {

    const birthdayValue = birthdayE1.value;
    if (birthdayValue === "") {
        alert("Please enter your birthday date");
    }
    else {
        const age = getAge(birthdayValue);
        resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
    }

}

function getAge(birthdayValue) {

    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    console.log(birthdayDate.getFullYear());
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    if (month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())) {
        age--
    }

    return age;
}

btnE1.addEventListener("click", calculateAge); 