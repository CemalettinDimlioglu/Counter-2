 // set initial
let count = 0 ; // 1. aşama
// select value and buttons
const value = document.querySelector("#value");   // 2. aşama
const btns = document.querySelectorAll(".btn")   // 3. aşama
console.log(value);
console.log(btns);
btns.forEach(function(btn){   // 4. aşama
    btn.addEventListener("click", function (e){
        const styles = e.currentTarget.classList;
        if(styles.contains("decrease")){   // 5. aşama
            count--;
        }
        else if(styles.contains("increase")){  // 6. aşama
            count++;
        }
        else {                                 // 7. aşama
            count = 0 ;
        }
       if(count>0){                            // 8. aşama
        value.style.color= "green"
       }
       else if (count <0) {
        value.style.color= "red"               // 9. aşama
       }
       else {
        value.style.color= "black"            // 10. aşama
       }
        value.textContent = count;           // 5. aşama ile birlikte
    })
})







