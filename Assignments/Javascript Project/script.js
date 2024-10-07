var form = document.querySelector("form");

form.addEventListener("submit",function(event){
    event.preventDefault();
    
    let image = document.querySelector("img");
    image.src = document.getElementById("update_profile").value;

    let heading = document.getElementById("profile_head");
    heading.innerText = document.getElementById("update_name").value;

    let para =  document.getElementById("profile_bio");
    para.innerText = document.getElementById("update_bio").value;
})