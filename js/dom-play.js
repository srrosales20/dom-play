//alert("Hi There");

// console.log(actors);

// const myNodelist = document.querySelectorAll("p");
// for (let i = 0; i < actors.length; i++) {
//     actors[i].style.backgroundColor = "yellow";
// }

// actors.forEach(highlight);

// document.querySelector(".hamlet").style.backgroundColor = "yellow";

function myAlert(){
    alert("I'm clicked!");
}

 const spans = document.querySelectorAll("#play span");

 console.log(spans);


for(const mySpan of spans){
 // mySpan.addEventListener("click", myAlert);
 //alert(mySpan.dataset.actor);
 mySpan.addEventListener("click",function(ev){
    highlightActor(mySpan.dataset.actor);
 });

}

function highlightActor(actor){

for(const mySpan of spans){
    if(actor == mySpan.dataset.actor){ //current actor, highlight
        mySpan.style.backgroundColor='yellow';
    }else{ //other actor, background white
        mySpan.style.backgroundColor='white';

    }
}
}

//     if(el.this.style.backgroundColor == 'yellow'){
//         el.this.style.backgroundColor='white';
//     }else{
//         el.this.style.backgroundColor='yellow';
//     }
// }




function highlight(el){

    if( el.style.backgroundColor == 'yellow'){
        el.style.backgroundColor='white';
    }else{
        el.style.backgroundColor='yellow';
    }
}


