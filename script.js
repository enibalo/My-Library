const container  = document.querySelector("#card-container");

let light = 42;
let light2 = 20;


for (let i = 0; i < 10; i ++){
    const card2 = document.createElement("li");
    card2.classList.add("title");

    const span = document.createElement("span");
    span.setAttribute( "data-text",  "My");
    span.classList.add("title-text");
    card2.appendChild(span);

    const span2 = document.createElement("span");
    span2.setAttribute( "data-text",  "Recs*");
    span2.classList.add("title-text");
    
    card2.appendChild(span2);
    

    span2.style.setProperty( "--color", "hsl( 80, 61%," + light2+ "%)");
    span.style.setProperty( "--color", "hsl( 80, 61%," + light2+ "%)");

    card2.style.width = "156px";
    card2.style.backgroundColor = "hsl(80, 0%," + light + "%)";
    card2.style.height = "220px";
    card2.style.marginLeft = "-40px";
  
   

   if (i != 9 ){
    container.appendChild(card2);
    }
    

    if ( i <= 3){
        light = light + 12; 
        light2 = light2 + 10;
    }else{
        light = light - 12; 
        light2 = light2 - 10;
    }

}