// function for search 
let search = document.getElementById("hearder_search")
search.style.backgroundColor ="#384464"
search.style.color = "white"
let photo_2 = document.getElementById("photo_2")
let button_for_close = document.getElementById("button_for_close")
function search_click(){
    if (search.style.display === "none" && photo_2.style.display === "block") {
        search.style.display = "block"
        photo_2.style.display = "none"
        button_for_close.style.display = "block"        
    } else {
        search.style.display = "none"
        photo_2.style.display = "block"
        button_for_close.style.display = "none"
    }

        // if language div was ophen and if doted div was ophen
        if (doted_div.style.display === "block" ) {
            doted_div.style.display = "none"
        } else {
            doted_div.style.display = "none"
        }
        //
}
    // for input close function
    function close_X_1(){
        if (search.style.display === "block" && photo_2.style.display === "none") {
            search.style.display = "none"
            photo_2.style.display = "block"
            button_for_close.style.display = "none"
        }

        
    }

// function for ophen doted div

let doted_div = document.getElementById("doted_div")
function dote_div(){
    if (doted_div.style.display === "none") {
        doted_div.style.display = "block"
    } else {
        doted_div.style.display = "none"
    }
}





// responsive navbar click opneh nav

function responsive_nav_bar(){
    let right_side_nav_responsive = document.getElementById("right_side_nav_responsive")
    if(right_side_nav_responsive.style.display === "none"){
        right_side_nav_responsive.style.display = "block"
    }else{
        right_side_nav_responsive.style.display = "none"
    }

}
function nav_close(){
    if(right_side_nav_responsive.style.display === "block"){
        right_side_nav_responsive.style.display = "none"
    }else{
        right_side_nav_responsive.style.display = "block"
    }
}





// dives switch /////////////////////

let container_1_div_1 = document.getElementById("container_1_div_1")
let container_1_div_2 = document.getElementById("container_1_div_2")

// left click
function right_click(){
    
    if(true){
        container_1_div_2.style.display = "flex"
        container_1_div_1.style.display = "none"
    }
}
// right click

function left_click(){

    if(true){
        container_1_div_1.style.display = "flex"
        container_1_div_2.style.display = "none"
    }
   
}


// scroll animation 

function scroll_animation(){
    let container_3_1 = document.getElementById("container_3_1")
    let container_4_1 = document.getElementById("container_4_1")
    let container_5_1 = document.getElementById("container_5_1")
    let container_6_1 = document.getElementById("container_6_1")
    let container_7_1 = document.getElementById("container_7_1")


    window.addEventListener("scroll", function(){
        let scroll_index = this.scrollY
        console.log(scroll_index);

        // div 1 opacity 
        if (scroll_index >= 400) {
            container_3_1.style.opacity = "10%";
        } else if (scroll_index >= 60) {
            container_3_1.style.opacity = "100%";
        }

        // div 2 opacity 
        if (scroll_index >= 880) {
            container_4_1.style.opacity = "10%";
        } else if (scroll_index >= 480) {
            container_4_1.style.opacity = "100%";
        }

        // div 3 opacity
        if (scroll_index >= 1300) {
            container_5_1.style.opacity = "10%";
        } else if (scroll_index >= 1200) {
            container_5_1.style.opacity = "100%";
        }

         // div 4 opacity
        if (scroll_index >= 1700) {
            container_6_1.style.opacity = "10%";
        } else if (scroll_index >= 1200) {
            container_6_1.style.opacity = "100%";
        }

         // div 5 opacity
        if (scroll_index >= 2100) {
            container_7_1.style.opacity = "10%";
        } else if (scroll_index >= 1700) {
            container_7_1.style.opacity = "100%";
        }
    })
}

scroll_animation()