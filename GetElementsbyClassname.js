//Get Element by class Name

let items = document.getElementsByClassName("list-group-item");
console.log(items);
items[2].style.backgroundColor = "Green";
items[1].textContent="Hello2";
for(let i=0; i<items.length;i++){
    items[i].style.fontWeight="bold";
}