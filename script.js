const container  = document.querySelector("#card-container");
let light = 1;


for (let i = 0; i < 5; i ++){

    const card2 = document.createElement("li");
    card2.classList.add("title");

    const span = document.createElement("span");
    span.setAttribute( "data-text",  "My");
    span.classList.add("title-text");
    span.className = "title-text top-layer";
    card2.appendChild(span);

    const span2 = document.createElement("span");
    span2.setAttribute( "data-text",  "Recs");
    span2.classList.add("title-text");
    
    card2.appendChild(span2);
    

    span2.style.setProperty( "--color", "rgba( 154, 205, 50, " + light+ ")");
    span.style.setProperty( "--color", "rgba( 154, 205, 50, " + light+ ")");

    if ( i != 0) {
        span.style.animationDuration = "4s";
        span.style.animationName = "move";
        span.style.animationFillMode = "forwards";
        span2.style.animationDuration = "4s";
        span2.style.animationName = "move";
        span2.style.animationFillMode = "forwards";
    }else{
        span.style.zIndex = "3";
        span2.style.zIndex = "2";
    }

    card2.style.width = "140px";
    container.appendChild(card2);
    light-= 0.2;

}

