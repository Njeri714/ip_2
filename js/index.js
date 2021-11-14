let maleAkanNames = ['Kiwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']

let femaleAkanNames = ['Akasua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']

let dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

function akangenerate() {
    let dateNumber = document.getElementById('date').value
    let gender = document.getElementById('gender').value

    let dayNumber = new Date(date).getday()

    if (gender == 'female') {
        console.log(`you were born on ${daysOfWeek[dayNumber]} and your Akan name is ${femaleAkanNames[dayNumber]}`)

    }
    else if (gender == 'male'){
        console.log(`You were born on ${daysOfWeek[dayNumber]} and your Akan name is ${maleAkanNames[dayNumber]}`)
        
    }
    else {
        console.log('You did not select the gender or date of birth')
    }









}