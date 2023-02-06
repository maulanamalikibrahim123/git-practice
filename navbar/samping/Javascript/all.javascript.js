const button = document.querySelector("#button");



button.addEventListener("click", function(){
    document.body.classList.toggle("terang");
    document.body.classList.toggle("gelap");
    
    if (document.body.className == "terang"){
        button.innerHTML = " Dibilangin Juga :v "
    }else{
        button.innerHTML = " Ini Hanya Hiasan ";
    }
})





