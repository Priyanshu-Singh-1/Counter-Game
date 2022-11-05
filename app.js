var val = document.getElementsByClassName("result-wrapper")[0];

let res = 0;
let reset = document.getElementById("reset");

reset.addEventListener('click', function(){
        res = 0;
        val.innerHTML = res;
        if(res==0){
                val.style.color = "black";
        }
})


//When the user clicks on the increase button
let increase = document.getElementById("increase");
//Increase function eventlistner
increase.addEventListener('click', function(){
        res+=1;
        val.innerHTML = res;
        if(res>=1){
                val.style.color = "green";
        }
        //For Debugging
        // console.log(res);
})

//When the user clicks on the decrease button
let decrease = document.getElementById("decrease");
//Decrease button event listner
decrease.addEventListener('click', function(){
        res-=1;
        val.innerHTML = res;
        if(res<0){
                val.style.color = "red";
        }
        //For debugging
        // console.log(res);
})

