function createListItem() {
    let my_sections = document.getElementsByClassName("my_section");
    let navbarList = document.getElementById("navbar__list");

    let count = 1;

    for (let section of my_sections) {
        let listItem = document.createElement("li");
        let newText = document.createTextNode("Section");
        navbarList.appendChild(listItem);
        listItem.appendChild(newText);

        console.log(section)
        let test = createLink(count, "#" + section.id)
        count++;
    };
};


function createLink (label, link) {
    let a = document.createElement('a');
    let textNode = document.createTextNode(label);
    a.appendChild(textNode);
    a.title= label;
    a.href= link;
    document.body.appendChild(a);
};

createListItem();
