// function for search 
let search = document.getElementById("hearder_search")
search.style.backgroundColor ="#313131"
search.style.color = "white"
let button_for_close = document.getElementById("button_for_close")
let subscribe_button = document.getElementById("sub_button")
function search_click(){
    if (search.style.display === "none" && subscribe_button.style.display === "block") {
        search.style.display = "block"
        button_for_close.style.display = "block"  
        subscribe_button.style.display = "none"      
    } else {
        search.style.display = "none"
        button_for_close.style.display = "none"
        subscribe_button.style.display = "block"
    }
}
    // for input close function
    function close_X_1(){
        if (search.style.display === "block") {
            search.style.display = "none"
            button_for_close.style.display = "none"
            subscribe_button.style.display = "block"
        }
   
    }

// function for ophen user div
let user_1 = document.getElementById("user_1")
function user_click(){
    let user_div = document.getElementById("user_div")

    if(user_div.style.display === "none"){
        user_div.style.display = "block"
    }else{
        user_div.style.display ="none"
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


function change_language() {
    let change_language = document.getElementById("change_language").value
    
    let leftside_nav_bar = document.querySelector(".leftside_nav_bar")
    let leftside_nav_bar_GE = document.querySelector(".leftside_nav_bar_GE")
    let rightside_nav_bar = document.querySelector(".rightside_nav_bar")
    let rightside_nav_bar_GE = document.querySelector(".rightside_nav_bar_GE")
    let container_1 = document.querySelector(".container_1")
    let container_1_GE = document.querySelector(".container_1_GE")



    // left side header
    if (change_language === "Georgian"){
        leftside_nav_bar.style.display = "none"
        leftside_nav_bar_GE.style.display = "flex"
    }else if (change_language === "English"){
        leftside_nav_bar.style.display = "flex"
        leftside_nav_bar_GE.style.display = "none"
    }


    // right side header 
    if (change_language === "Georgian"){
        rightside_nav_bar.style.display = "none"
        rightside_nav_bar_GE.style.display = "flex"
    }else if (change_language === "English"){
        rightside_nav_bar.style.display = "flex"
        rightside_nav_bar_GE.style.display = "none"
    }

    
    // container 1
    if (change_language === "Georgian"){
        container_1.style.display = "none"
        container_1_GE.style.display = "block"
    }else if (change_language === "English"){
        container_1.style.display = "block"
        container_1_GE.style.display = "none"
    }


}
document.getElementById("change_language").addEventListener("change", change_language)