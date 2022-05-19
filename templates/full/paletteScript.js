// JJWebDesign
// * /  .\   *
// * /  =__| * 
// * /    || *
// * * * * * *

document.getElementById(`websiteBuilderMenu`).addEventListener(`mousedown`, mousedown);
document.getElementById(`websiteBuilderMenu`).addEventListener(`touchstart`, mousedown);
function mousedown(e) {
    
    let menu = document.getElementById(`websiteBuilderMenu`);

    window.addEventListener(`mouseup`, mouseup);
    window.addEventListener(`touchend`, fingerUp);
    window.addEventListener(`mousemove`, mousemove);
    window.addEventListener(`touchmove`, mousemove);

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

    function fingerUp(e) {

        window.removeEventListener(`touchmove`, mousemove);
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
        minimizeButton.innerHTML = `<strong>−</strong>`

        if (window.innerWidth < 800)
        {
            menu.style.height = `250px`;
            menu.style.width = `350px`;
            return;
        }

        menu.style.height = `400px`;
        menu.style.width = `550px`;
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


function onLoad () {

    document.getElementById(`mainColor`).value = window.localStorage.getItem(`mainColor`);
    document.getElementById(`secondaryColor`).value = window.localStorage.getItem(`secondaryColor`);
    document.getElementById(`tertiaryColor`).value = window.localStorage.getItem(`tertiaryColor`);
    document.getElementById(`outlineColor`).value = window.localStorage.getItem(`outlineColor`);

    changeMain()
    changeSecondary()
    changeTertiary()
    changeOutline()

    console.log(`JJWebDesign`)
    console.log(`* /  .\\   *`)
    console.log(`* /  =__| *`)
    console.log(`* /    || *`)
    console.log(`* * * * * *`)
}

function changeMain () {

    window.localStorage.setItem(`mainColor`, document.getElementById(`mainColor`).value);

    document.getElementById(`body`).style.background = `radial-gradient(circle at center, `+ backgroundBase + `, ` + document.getElementById(`mainColor`).value + `)`;
}

function changeSecondary () {

    window.localStorage.setItem(`secondaryColor`, document.getElementById(`secondaryColor`).value);

    document.getElementById(`navBar`).style.backgroundColor = document.getElementById(`secondaryColor`).value;

    if (document.getElementById(`footer`) != null)
    {
        document.getElementById(`footer`).style.backgroundColor = document.getElementById(`secondaryColor`).value;
        document.getElementById(`websiteSaleLink`).style.background = `radial-gradient(circle at center, #ffffff33, ` + document.getElementById(`secondaryColor`).value + ` 100%)`;
    }

}

function changeTertiary () {

    window.localStorage.setItem(`tertiaryColor`, document.getElementById(`tertiaryColor`).value);

    if (document.getElementById(`inquiryTextbox`) != null)
    {
        document.getElementById(`inquiryTextbox`).style.backgroundColor = document.getElementById(`tertiaryColor`).value + `80`;
        document.getElementById(`emailInput`).style.backgroundColor = document.getElementById(`tertiaryColor`).value + `80`;
        document.getElementById(`nameInput`).style.backgroundColor = document.getElementById(`tertiaryColor`).value + `80`;
        document.getElementById(`phoneInput`).style.backgroundColor = document.getElementById(`tertiaryColor`).value + `80`;
        document.getElementById(`sendMessageButton`).style.backgroundColor = document.getElementById(`tertiaryColor`).value + `80`;
        return;
    }

    let infoBoxs = document.getElementsByClassName(`info`);

    for (let i=0; i < infoBoxs.length; i++)
    {
        infoBoxs[i].style.backgroundColor = document.getElementById(`tertiaryColor`).value + `80`;

    }

    if (document.getElementsByClassName(`galleryItem`) != null)
    {

        let galleryItem = document.getElementsByClassName(`galleryItem`);

        for (let i=0; i < galleryItem.length; i++)
        {
            galleryItem[i].style.backgroundColor = document.getElementById(`tertiaryColor`).value + `80`;
    
        }

    }

}

function changeOutline () {

    window.localStorage.setItem(`outlineColor`, document.getElementById(`outlineColor`).value);

    let navLinks = document.getElementById(`navBar`).querySelectorAll(`a`);
    for (let i=0; i < navLinks.length; i++)
    {
        navLinks[i].style.border = `1px solid ` + document.getElementById(`outlineColor`).value;
    }

    let hr = document.getElementsByClassName(`hr`);
    for (let i=0; i < hr.length; i++)
    {
        hr[i].style.color = document.getElementById(`outlineColor`).value;
    } 

    if (document.getElementById(`inquiryTextbox`) != null)
    {
        document.getElementById(`inquiryTextbox`).style.border = `1px solid ` + document.getElementById(`outlineColor`).value;
        document.getElementById(`emailInput`).style.border = `1px solid ` + document.getElementById(`outlineColor`).value;
        document.getElementById(`nameInput`).style.border = `1px solid ` + document.getElementById(`outlineColor`).value;
        document.getElementById(`phoneInput`).style.border = `1px solid ` + document.getElementById(`outlineColor`).value;
        document.getElementById(`sendMessageButton`).style.border = `1px solid ` + document.getElementById(`outlineColor`).value;
        return;
    }

    if (document.getElementById(`websiteHeader`) != null)
    {
        document.getElementById(`websiteHeader`).style.borderBottom = `2px solid ` + document.getElementById(`outlineColor`).value;
        document.getElementById(`websiteSaleLinkContainer`).style.borderBottom = `2px solid ` + document.getElementById(`outlineColor`).value;
        let infoCanvas = document.getElementsByClassName(`infoCanvas`);
        for (let i=0; i < infoCanvas.length; i++)
        {
            infoCanvas[i].style.borderBottom = `5px solid ` + document.getElementById(`outlineColor`).value;
        }  
    }

    
}