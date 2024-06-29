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



// check sign in corectly answers

function check(){
    let email_input = document.getElementById("email_input").value
    let error_text_1 = document.getElementById("error_text_1")

    let password_input = document.getElementById("password_input").value
    let error_text_2 = document.getElementById("error_text_2")

    let repeat_password_input = document.getElementById("repeat_password_input").value
    let error_text_3 = document.getElementById("error_text_3")   



    // function check correct email
    function check_correct_email(){
    
        if(email_input === ""){
            error_text_1.innerText = "Enter Email"
        }else if(!email_input.includes("@")){
            error_text_1.innerText = "You need to use '@' "
        }
    }
    
    check_correct_email()



    
    // function for strong password

    function strong_password(){

        if(password_input === ""){
            error_text_2.innerText = "Enter Password"
        }else if(password_input.length < 5){
            error_text_2.style.color = "yellow"
            error_text_2.innerText = "You password is not strong"
        }else if(password_input.length > 5 && password_input.length < 14){
            error_text_2.style.color = "green"
            error_text_2.innerText = "you password is strong"
        }else if(password_input.length > 14){
            error_text_2.style.color = "red"
            error_text_2.innerText = "you password is too much"
        }
    }

    strong_password()



    // function for repeat password

    function repeat_password_check(){

        if(repeat_password_input === password_input && repeat_password_input !== ""){
            error_text_3.style.color = "green"
            error_text_3.innerText = "Correct"
        }else if(repeat_password_input !== password_input){
            error_text_3.style.color = "red"
            error_text_3.innerText = "Pleas repeat corectly"
        }else if(repeat_password_input.length <  password_input.length){
            error_text_3.style.color = "red"
            error_text_3.innerText = "Less then password"
        }else if(repeat_password_input.length >  password_input.length){
            error_text_3.style.color = "red"
            error_text_3.innerText = "Too much"
        }
    }

    repeat_password_check()



    let gender = document.getElementById("gender").value
    let container_1 = document.querySelector(".container_1")

    if(gender === "Male"){
        container_1.style.border = "solid 3px skyblue"
    }else if(gender === "Female"){
        container_1.style.border = "solid 3px pink"
    }else{
        container_1.style.border = "solid 1px white"
    }


}
