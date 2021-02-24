let li = document.querySelectorAll("li");
let form = document.getElementById("form");
let input =document.getElementById("input");
form.addEventListener("submit",e => {
  e.preventDefault();
  let item = input.value;
  console.log(item);

});

for(let list of li){
  let btn= document.createElement("button");
btn.classList.add("btn","btn-danger","btn-sm","float-right");
btn.textContent="remove";
  //dom events
  //console.log(list);
  
    list.appendChild(btn);
  
  list.addEventListener("click",e =>{
    console.log(e.target); // target means current vaules
    //list.remove(); // remove the values after clicking
    btn.parentElement.remove();

  });
}

// let child = document.getElementById("child");
// let parent = document.getElementById("parent");
// let grandparent=document.getElementById("grandparent");

// child.addEventListener("click", e => {
//   console.log("child clicked");
//   e.stopPropagation()
// });
// parent.addEventListener("click",e =>{
//   console.log("parent clicked");
// });
// grandparent.addEventListener("click",e =>{
//   console.log("grandparent clicked");
// });

































