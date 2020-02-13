window.onload = function () {
    const sections = [section1, section2, section3, section4];
    let listItem = document.getElementById(navbar__list);
    for (let section of sections) {
        listValue = document.createElement("li");
        listValue.textContent = section;
        listItem.appendChild(listValue);
    }
};
