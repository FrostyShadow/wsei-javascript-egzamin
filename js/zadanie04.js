function getTagsOfElements(elements){
    var names = [];
    for(let i = 0; i < elements.length; i++){
        names.push(elements[i].tagName);
    }
    return names;
}

let sub1 = document.getElementsByClassName("sample_class");
console.log(getTagsOfElements(sub1));

function getClassesOfElements(element){
    var classes = []
    for(let i = 0; i < element.classList.length; i++){
        classes.push(element.classList.item(i));
    }
    return classes;
}

let sub2 = document.getElementById("sample_id");
console.log(getClassesOfElements(sub2))

function getInnerTextsOfElements(elements){
    let texts = [];
    for(let i = 0; i < elements.length; i++){
        texts.push(elements[i].innerText);
    }
    return texts;
}

let sub3 = document.getElementsByClassName("sample_class_2");
console.log(getInnerTextsOfElements(sub3))

function getAddressesOfElements(elements){
    let links = [];
    for(let i = 0; i < elements.length; i++){
        links.push(elements[i].getAttribute("href"));
    }
    return links;
}

let sub4 = document.getElementsByTagName("a");
console.log(getAddressesOfElements(sub4))

let sub5 = document.querySelector(".sample_class_3").children;
console.log(getTagsOfElements(sub5))