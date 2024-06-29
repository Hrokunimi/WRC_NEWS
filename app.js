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




// random div with photo //////////////////////////////

let main_container_1 = document.getElementById("main_container_1") 


function switch_photo(){ 

//photo_1
    let make_dv = document.createElement("div") 
    make_dv.style.backgroundImage = 'url(/all_photo/photo_3.jfif)'
    make_dv.style.minWidth = "100%"
    make_dv.style.minHeight = "100%"
    make_dv.style.backgroundImage = "cover"
    make_dv.style.backgroundRepeat = "no-repeat"

//photo_2
    let make_dv_2 = document.createElement("div")
    make_dv_2.style.backgroundImage = 'url(/all_photo/photo_4.jfif)'
    make_dv_2.style.minWidth = "100%"
    make_dv_2.style.minHeight = "100%"
    make_dv_2.style.backgroundImage = "cover"
    make_dv_2.style.backgroundRepeat = "no-repeat"


// photo 3
let make_dv_3 = document.createElement("div")
    make_dv_3.style.backgroundImage = 'url(/all_photo/photo_5.jpg)'
    make_dv_3.style.minWidth = "100%"
    make_dv_3.style.minHeight = "100%"
    make_dv_3.style.backgroundImage = "cover"
    make_dv_3.style.backgroundRepeat = "no-repeat"



    // first photo p text  with animation 
    if(make_dv){
        let p_f_m_photo_1 = document.createElement("p")
        p_f_m_photo_1.id = "p_for_main_photo"
        p_f_m_photo_1.innerText = "Where to watch Rally Italia Sardegna 2024"

        // button for photo

        let bt_for_photo = document.createElement("button")
        bt_for_photo.id = "bt_for_photo"
        bt_for_photo.textContent = "Read More"
    
        make_dv.appendChild(p_f_m_photo_1)
        make_dv.appendChild(bt_for_photo)
    }
    
    
    if(make_dv_2){
        let p_f_m_photo_2 = document.createElement("p")
        p_f_m_photo_2.id = "p_for_main_photo_2"
        p_f_m_photo_2.innerText = "20 years on and still jumping in the dust"

        // button for second photo

        let bt_for_photo_2 = document.createElement("button")
        bt_for_photo_2.id = "bt_for_photo_2"
        bt_for_photo_2.textContent = "Read More"

        make_dv_2.appendChild(p_f_m_photo_2)
        make_dv_2.appendChild(bt_for_photo_2)
    }

    if(make_dv_3){
        let p_f_m_photo_3 = document.createElement("p")
        p_f_m_photo_3.id = "p_for_main_photo_3"
        p_f_m_photo_3.innerText = "Pressure builds as Ogier loses Italy lead"

        // button for second photo

        let bt_for_photo_3 = document.createElement("button")
        bt_for_photo_3.id = "bt_for_photo_3"
        bt_for_photo_3.textContent = "Read More"

        make_dv_3.appendChild(p_f_m_photo_3)
        make_dv_3.appendChild(bt_for_photo_3)
    }


// for switch photo with diley 

    let photo_counter = 0
    
    setInterval(function(){
        if(photo_counter % 3 === 0){
            main_container_1.innerHTML = " "
            main_container_1.appendChild(make_dv)
        }else if(photo_counter % 3 === 1){
            main_container_1.innerHTML = " "
            main_container_1.appendChild(make_dv_2)
        }else{
            main_container_1.innerHTML = " "
            main_container_1.appendChild(make_dv_3)
        }
        photo_counter++
    },4000)
    
}


switch_photo()





// dives switch /////////////////////

let container_2_div_1 = document.getElementById("container_2_div_1")
let container_2_div_2 = document.getElementById("container_2_div_2")

// left click
function right_click(){
    
    if(true){
        container_2_div_2.style.display = "flex"
        container_2_div_1.style.display = "none"
    }
}


// right click

function left_click(){

    if(true){
        container_2_div_1.style.display = "flex"
        container_2_div_2.style.display = "none"
    }
   
}





// change lenguage

function change_language() {
    let change_language = document.getElementById("change_language").value
    
    let leftside_nav_bar = document.querySelector(".leftside_nav_bar")
    let leftside_nav_bar_GE = document.querySelector(".leftside_nav_bar_GE")
    let for_runing_text_1 = document.querySelector(".for_runing_text_1")
    let for_runing_text_1_GE = document.querySelector(".for_runing_text_1_GE")
    let container_2_main_2 = document.querySelector(".container_2_main_2")
    let container_2_main_2_GE = document.querySelector(".container_2_main_2_GE")
    let container_3_main = document.querySelector(".container_3_main")
    let container_3_main_GE = document.querySelector(".container_3_main_GE")
    let container_5_main = document.querySelector(".container_5_main")
    let container_5_main_GE = document.querySelector(".container_5_main_GE")
    let container_6 = document.querySelector(".container_6")
    let container_6_GE = document.querySelector(".container_6_GE")
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

    // georgian rining text
    if(change_language === "Georgian"){
        for_runing_text_1.style.display = "none"
        for_runing_text_1_GE.style.display = "block"
    }else if(change_language === "English"){
        for_runing_text_1.style.display = "block"
        for_runing_text_1_GE.style.display = "none"
    }

    // georgian container 2
    if(change_language === "Georgian"){
        container_2_main_2.style.display = "none"
        container_2_main_2_GE.style.display = "flex"
    }else if(change_language === "English"){
        container_2_main_2.style.display = "flex"
        container_2_main_2_GE.style.display = "none"
    }

    // georgian container 3
    if(change_language === "Georgian"){
        container_3_main.style.display = "none"
        container_3_main_GE.style.display = "block"
    }else if(change_language === "English"){
        container_3_main.style.display = "block"
        container_3_main_GE.style.display = "none"
    }

    // georgian container 5
    if(change_language === "Georgian"){
        container_5_main.style.display = "none"
        container_5_main_GE.style.display = "block"
    }else if(change_language === "English"){
        container_5_main.style.display = "block"
        container_5_main_GE.style.display = "none"
    }

    // georgian container 6
    if(change_language === "Georgian"){
        container_6.style.display = "none"
        container_6_GE.style.display = "block"
    }else if(change_language === "English"){
        container_6.style.display = "block"
        container_6_GE.style.display = "none"
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

