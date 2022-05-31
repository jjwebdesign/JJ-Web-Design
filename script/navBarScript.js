//~=>@JJWEB<=~
// * /  .\   *
// * /  =__| * 
// * /    || *
// * * * * * *

function navBarChange () {

    let nav = document.getElementById(`navBar`);
    let rect = document.getElementById(`top`).getBoundingClientRect();

    nav.style.opacity = `0.5`;
    nav.style.height = `20px`;

    if (rect.top < 0)
    {
        nav.style.position = `fixed`;

    }
    else
    {
        nav.style.position = `sticky`;

    }

    setTimeout(() => {
        
        nav.style.opacity = `1`; 
        nav.style.height = `40px`;        

    }, 750);

}