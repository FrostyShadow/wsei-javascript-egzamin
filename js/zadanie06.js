window.onload = function() {
    let shoppingList = document.getElementById("shopping-list");

    document.getElementById("button-1").onclick = function(){
        let li = document.createElement("li");
        li.appendChild(document.createTextNode("Chleb"));
        shoppingList.appendChild(li);
    }

    document.getElementById("button-2").onclick = function(){
        shoppingList.removeChild(shoppingList.lastElementChild);
    }

    document.getElementById("button-3").onclick = function(){
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(shoppingList.children[1].innerText));
        shoppingList.appendChild(li);
    }
}