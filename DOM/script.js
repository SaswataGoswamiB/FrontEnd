var a = document.querySelector("#change-heading");
console.log(a);
var b = document.querySelector("#main-heading")
b.innerHTML = "Welcome back Jubbu";
b.style.color = "red"
b.style.backgroundColor = "pink"
var flag = 0;

a.addEventListener("click",function(){
    if(flag === 0){
    b.innerHTML ="Now Suck my dick"
    b.style.color ="yellow"
    b.style.backgroundColor="black"
    flag = 1;
}
else{
    b.innerHTML = "Welcome back Jubbu";
b.style.color = "red"
b.style.backgroundColor = "pink"
flag = 0;

}
});


// selcting multiple elements all at one.
var multiple = document.querySelectorAll("h2")
console.log(multiple);

// the multiple query selector gives data in the form of a NodeList 0th element ,1st element like that.

multiple.forEach(function(e)
{
    console.log(e.innerHTML)
})

// TextContext vs innerHTML

var container = document.getElementById("innerhtml");
//container.innerHTML = "<h1>This is InnerHtml</h1>"
container.textContent = "<h1>This is Text Context</h1>"

