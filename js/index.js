let maleAkanNames = ['Kiwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']

let femaleAkanNames = ['Akasua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']

let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

function akangenerate(event) {
    event.preventDefault()
   let dateNumber = document.querySelector('#date').value;
    let gender = document.getElementById('gender').value;

    let dayNumber = new Date(date).getDay();
 
    if (gender ==''|| date == ''){
        
        alert('Error! You did not choose gender and date')
    }
    
    else if(gender=='male') {
        
        alert(`you were born on ${weekDays[dayNumber]} and your Akanname is ${maleAkanNames[dayNumber]}`)

    }
    else{
        alert(`You were born on ${weekDays[dayNumber]} and your Akanname is ${femaleAkanNames[dayNumber]}`)
        
    }
    
 
}