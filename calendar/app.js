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


//  function for change display////

function change_display(){
    let main_container_1 = document.getElementById("main_container_1")
    let main_container_2 = document.getElementById("main_container_2")
    let change_display = document.getElementById("change_display")
    let change_display_ball = document.getElementById("change_display_ball")

    
    if(main_container_1.style.display === "block"){
        main_container_1.style.display = "none"
        main_container_2.style.display = "block"
    }else{
        main_container_1.style.display = "block"
        main_container_2.style.display = "none"
    }

    // function for change click bacgrounfcolor
        function click_color(){
            if(change_display.style.backgroundColor === "orangered"){
                change_display.style.backgroundColor = "gray"
                change_display.style.transition = "1s"
                ball()
            }else{
                change_display.style.backgroundColor = "orangered"

            }
        } 
        click_color()


        // function for ball move

        function ball(){
            if(true){
                change_display_ball.style.animationName = "ball_move"
            }
        }    
}



//  function for make scroll animation

function scrool_animation(){
    let container_2_1 = document.getElementById("container_2_1")
    let container_3_1 = document.getElementById("container_3_1")

    window.addEventListener("scroll", function(event){
        let y = this.scrollY
        console.log(y);

        if(y > 170){
            container_2_1.style.opacity = "50%"
        }else{
            container_2_1.style.opacity = "100%"
        }

        if(y > 450){
            container_3_1.style.opacity = "50%"
        }else{
            container_3_1.style.opacity = "100%"
        }


    })
}

scrool_animation()


// change lenguage

function change_language() {
    let change_language = document.getElementById("change_language").value
    
    let leftside_nav_bar = document.querySelector(".leftside_nav_bar")
    let leftside_nav_bar_GE = document.querySelector(".leftside_nav_bar_GE")
    let header_2 = document.querySelector(".header_2")
    let header_2_GE = document.querySelector(".header_2_GE")
    let main_container_1 = document.getElementById("main_container_1")
    let main_container_1_GE = document.getElementById("main_container_1_GE")
    let footer_2 = document.querySelector(".footer_2")
    let footer_2_GE = document.querySelector(".footer_2_GE")
    let footer_3 = document.querySelector(".footer_3")
    let footer_3_GE = document.querySelector(".footer_3_GE")





    // language change
    if (change_language === "Georgian"){
        leftside_nav_bar.style.display = "none"
        leftside_nav_bar_GE.style.display = "flex"
    }else if (change_language === "English"){
        leftside_nav_bar.style.display = "flex"
        leftside_nav_bar_GE.style.display = "none"
    }

    // header 2 georgian version
    if (change_language === "Georgian"){
        header_2.style.display = "none"
        header_2_GE.style.display = "flex"
    }else if (change_language === "English"){
        header_2.style.display = "flex"
        header_2_GE.style.display = "none"
    }

    // main container 1 georgian version
    if (change_language === "Georgian"){
        main_container_1.style.display = "none"
        main_container_1_GE.style.display = "block"
    }else if (change_language === "English"){
        main_container_1.style.display = "block"
        main_container_1_GE.style.display = "none"
    }

    
    // georgian footer_2
    if(change_language === "Georgian"){
        footer_2.style.display = "none"
        footer_2_GE.style.display = "flex"
    }else if(change_language === "English"){
        footer_2.style.display = "flex"
        footer_2_GE.style.display = "none"
    }

    // georgian footer_3
    if(change_language === "Georgian"){
        footer_3.style.display = "none"
        footer_3_GE.style.display = "flex"
    }else if(change_language === "English"){
        footer_3.style.display = "flex"
        footer_3_GE.style.display = "none"
    }

}
document.getElementById("change_language").addEventListener("change", change_language)

