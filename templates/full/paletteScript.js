// JJWebDesign
// * /  .\   *
// * /  =__| * 
// * /    || *
// * * * * * *

document.getElementById(`websiteBuilderMenu`).addEventListener(`mousedown`, mousedown);
function mousedown(e) {
    
    let menu = document.getElementById(`websiteBuilderMenu`);

    window.addEventListener(`mouseup`, mouseup);
    window.addEventListener(`mousemove`, mousemove);

    let prevX = e.clientX;
    let prevY = e.clientY;

    function mousemove(e) {

        let newX = prevX - e.clientX;
        let newY =  prevY - e.clientY;

        const rect = menu.getBoundingClientRect();

        menu.style.left = rect.left - newX + `px`;
        menu.style.top = rect.top - newY + `px`;

        prevX = e.clientX;
        prevY = e.clientY;
    }

    function mouseup(e) {

        window.removeEventListener(`mousemove`, mousemove);

    }

}

function shrinkGrowMenu () {

    let menu = document.getElementById(`websiteBuilderMenu`);
    let minimizeButton = document.getElementById(`minimizeButton`);

    if (minimizeButton.innerHTML == `<strong>−</strong>`)
    {
        menu.style.height = `35px`;
        menu.style.width = `200px`;
        minimizeButton.innerHTML = `<strong>+</strong>`;


    }
    else
    {
        menu.style.height = `400px`;
        menu.style.width = `550px`;
        minimizeButton.innerHTML = `<strong>−</strong>`
    }
}

let backgroundBase = `#ffffff`;
function changeTheme () {

    if (document.getElementById(`dark`).checked)
    {
        document.getElementById(`body`).style.color = `white`;
        backgroundBase = `#000000`;
        changeMain();
        let navLinks = document.getElementById(`navBar`).querySelectorAll(`a`);
        for (let i=0; i < navLinks.length; i++)
        {
            navLinks[i].style.color = `white`
        }

    }
    else
    {
        document.getElementById(`body`).style.color = `black`;
        backgroundBase = `#ffffff`;
        changeMain();
        let navLinks = document.getElementById(`navBar`).querySelectorAll(`a`);
        for (let i=0; i < navLinks.length; i++)
        {
            navLinks[i].style.color = `black`
        }
    }
}

function changeMain () {

    document.getElementById(`body`).style.background = `radial-gradient(circle at center, `+ backgroundBase + `, ` + document.getElementById(`mainColor`).value + `)`;
}

function changeSecondary () {

    document.getElementById(`navBar`).style.backgroundColor = document.getElementById(`secondaryColor`).value;
    document.getElementById(`footer`).style.backgroundColor = document.getElementById(`secondaryColor`).value;
    document.getElementById(`websiteSaleLink`).style.background = `radial-gradient(circle at center, #ffffff33, ` + document.getElementById(`secondaryColor`).value + ` 100%)`;
}

function changeTertiary () {

    let infoBoxs = document.getElementsByClassName(`info`);
    console.log(infoBoxs);

    for (let i=0; i < infoBoxs.length; i++)
    {
        infoBoxs[i].style.backgroundColor = document.getElementById(`tertiaryColor`).value + `80`;

    }

}

function changeOutline () {

    document.getElementById(`websiteHeader`).style.borderBottom = `2px solid ` + document.getElementById(`outlineColor`).value;

    document.getElementById(`websiteSaleLinkContainer`).style.borderBottom = `2px solid ` + document.getElementById(`outlineColor`).value;

    let navLinks = document.getElementById(`navBar`).querySelectorAll(`a`);
    for (let i=0; i < navLinks.length; i++)
    {
        navLinks[i].style.border = `1px solid ` + document.getElementById(`outlineColor`).value;
    } 

    let infoCanvas = document.getElementsByClassName(`infoCanvas`);
    for (let i=0; i < infoCanvas.length; i++)
    {
        infoCanvas[i].style.borderBottom = `5px solid ` + document.getElementById(`outlineColor`).value;
    }

    let hr = document.getElementsByClassName(`hr`);
    console.log(hr)
    for (let i=0; i < hr.length; i++)
    {
        hr[i].style.color = document.getElementById(`outlineColor`).value;
    }       
}