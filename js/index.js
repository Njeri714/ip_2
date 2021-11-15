let maleAkanNames = ['Kiwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']

let femaleAkanNames = ['Akasua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']

let dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

function akangenerate(event) {
    event.preventDefault()
   let dateNumber = document.getElementById ('date').value
    let gender = document.getElementById('gender').value

    let dayNumber = new Date (dateNumber).getDay
 
    if (gender =="" || date == ""){
        document.getElementById('btn btn-primary').innerHTML(`Error! You did not choose gender and date`)
    }
    
    else if(gender == 'female') {
        document.getElementById('btn btn-primary').innerHTML(`you were born on ${dayOfWeek[dayNumber]} and your Akan name is ${femaleAkanNames[dayNumber]}`)

    }
    else{
        document.getElementById('btn btn-primary').innerHTML(`You were born on ${dayOfWeek[dayNumber]} and your Akan name is ${maleAkanNames[dayNumber]}`)
        
    }
    
 
}


