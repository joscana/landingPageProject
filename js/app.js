//Global Variables

//Select sections by class name, select navbar by ID

let my_sections = document.getElementsByClassName("my_section");
let navbarList = document.getElementById("navbar__list");


//Dynamically creates a link for each HTML section

function createNavbarLinks () {
    let count = 1;
    for (let section of my_sections) {
        let listItem = document.createElement("li");
        let a = document.createElement('a');
        let textNode = document.createTextNode(section.dataset.nav);
        let link = "#" + section.id;
        a.appendChild(textNode);
        a.href= link;
        navbarList.appendChild(listItem);
        listItem.appendChild(a)
        count++;
    };
};


createNavbarLinks();