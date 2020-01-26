window.onload = function() {
    let buttons = document.getElementsByTagName("button");
    for(let i = 0; i < buttons.length; i++){
        buttons[i].onclick = function(){
            document.getElementById("container").innerText = buttons[i].getAttribute("data-text");
        }
    }
}