function clickCounter() {
     
        if (localStorage.clickcount) {
            localStorage.clickcount++;
        } else {
            localStorage.setItem('clickcount', 1);
           // localStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
    } 


