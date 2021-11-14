let maleAkanNames = ['Kiwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']

let femaleAkanNames = ['Akasua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']

let dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

function akangenerate(event) {
    event.preventDefault()
    let dateNumber = document.getElementById('date').value
    let gender = document.getElementById('gender').value

    let dayNumber = new Date(date).getday()

    if (gender =="" || date == ""){
        alert(`Error! You did not choose gender and date`)
    }
    
    else if(gender == 'female') {
        alert(`you were born on ${daysOfWeek[dayNumber]} and your Akan name is ${femaleAkanNames[dayNumber]}`)

    }
    else{
        alert(`You were born on ${daysOfWeek[dayNumber]} and your Akan name is ${maleAkanNames[dayNumber]}`)
        
    }
    
   
}