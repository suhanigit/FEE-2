var forms =  document.querySelector("form");

forms.addEventListener("submit",function(event)
{
    let inp = document.querySelector("input")
    console.dir(inp);
    console.dir(inp.value);
    event.preventDefault();

    //passing input data to paragraph
    let p = document.querySelector("p");
    p.innerText = inp.value;
});

// 1.) preventdefault - prevents the default behavior of the form
// var forms =  document.querySelector("form");

// forms.addEventListener("submit",function(event)
// {
//     event.preventDefault();
//     console.log("Form Submitted");
// });