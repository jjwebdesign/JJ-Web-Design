//~=>@JJWEB<=~
// * /  .\   *
// * /  =__| * 
// * /    || *
// * * * * * *

const websiteBuilderMenu = document.getElementById(`websiteBuilderMenu`);
websiteBuilderMenu.addEventListener(`mousedown`, mousedown);

const backlight = document.getElementById(`backgroundLight`);
backlight.addEventListener(`mouseover`, function () {websiteBuilderMenu.removeEventListener(`mousedown`, mousedown)});
backlight.addEventListener(`mouseleave`, function () {websiteBuilderMenu.addEventListener(`mousedown`, mousedown)});
backlight.addEventListener(`input`, changeTheme);

function mousedown(e) {
    
    window.addEventListener(`mouseup`, mouseup);
    window.addEventListener(`mousemove`, mousemove);

    let prevX = e.clientX;
    let prevY = e.clientY;

    function mousemove(e) {

        let newX = prevX - e.clientX;
        let newY =  prevY - e.clientY;

        const rect = websiteBuilderMenu.getBoundingClientRect();

        websiteBuilderMenu.style.left = rect.left - newX + `px`;
        websiteBuilderMenu.style.top = rect.top - newY + `px`;

        prevX = e.clientX;
        prevY = e.clientY;
    }

    function mouseup(e) {

        window.removeEventListener(`mousemove`, mousemove);
    }

}

websiteBuilderMenu.addEventListener(`touchmove`, function (e) {
    
    let touchLocation = e.targetTouches[0];
    
    websiteBuilderMenu.style.left = touchLocation.pageX + `px`;
    websiteBuilderMenu.style.top = touchLocation.pageY + `px`;
});


function shrinkGrowMenu () {

    let minimizeButton = document.getElementById(`minimizeButton`);

    if (minimizeButton.innerHTML == `<strong>−</strong>`)
    {
        websiteBuilderMenu.style.height = `35px`;
        websiteBuilderMenu.style.width = `200px`;
        minimizeButton.innerHTML = `<strong>+</strong>`;
    }
    else
    {
        minimizeButton.innerHTML = `<strong>−</strong>`

        if (window.innerWidth < 800)
        {
            websiteBuilderMenu.style.height = `250px`;
            websiteBuilderMenu.style.width = `350px`;
            return;
        }

        websiteBuilderMenu.style.height = `400px`;
        websiteBuilderMenu.style.width = `550px`;
    }
}


function onLoad () {

    document.getElementById(`mainColor`).value = window.localStorage.getItem(`mainColor`);
    document.getElementById(`secondaryColor`).value = window.localStorage.getItem(`secondaryColor`);
    document.getElementById(`tertiaryColor`).value = window.localStorage.getItem(`tertiaryColor`);
    document.getElementById(`outlineColor`).value = window.localStorage.getItem(`outlineColor`);

    changeTheme ()
    changeMain()
    changeSecondary()
    changeTertiary()
    changeOutline()

    console.log(`~=>@JJWEB<=~`)
    console.log(`* /  .\\   *`)
    console.log(`* /  =__| *`)
    console.log(`* /    || *`)
    console.log(`* * * * * *`)
}

function changeTheme () {

    let backlightValue = backlight.value;
    let textColor;

    if (backlightValue > 125)
    {
        textColor = `black`;
    }
    else
    {
        textColor = `white`
    }

    document.getElementById(`body`).style.color = textColor;

    let navLinks = document.getElementById(`navBar`).querySelectorAll(`a`);
    for (let i=0; i < navLinks.length; i++)
    {
        navLinks[i].style.color = textColor;

        document.getElementById(`body`).style.background = `radial-gradient(circle at center, `+ `rgb(` + backlightValue + `, ` + backlightValue + `, ` + backlightValue + `)` + `, ` + document.getElementById(`mainColor`).value + `)`;

    }

}

function changeMain () {

    window.localStorage.setItem(`mainColor`, document.getElementById(`mainColor`).value);

    changeTheme();

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