//~=>@JJWEB<=~
// * /  .\   *
// * /  =__| * 
// * /    || *
// * * * * * *

(function(){ emailjs.init("K6rZs5jDpa6e5lj2Y"); })();

function submitOrder() {

    let fromEmail  = document.getElementById(`email`).value;
    let fromPhone  = document.getElementById(`phone`).value;
    let name  = document.getElementById(`name`).value;
    let comments = document.getElementById(`additionalInfo`).value;
    let pMethod;

    if ((fromEmail == ``) || (fromPhone == ``) || (name == ``))
    {
        alert(`Contact information can not be left blank`);
        return;
    }

    if (document.getElementById(`pEmail`).checked)
    {
        pMethod = `Email`;
    }
    else
    {
        pMethod = `Phone`;
    }

    let contents = {

        from_name: name,
        email: fromEmail,
        phone: fromPhone,
        method: pMethod,
        comments: comments,
        template: window.localStorage.getItem(`template`),
        theme: window.localStorage.getItem(`theme`),
        mainColor: window.localStorage.getItem(`mainColor`),
        secondaryColor: window.localStorage.getItem(`secondaryColor`),
        tertiaryColor: window.localStorage.getItem(`tertiaryColor`),
        outlineColor: window.localStorage.getItem(`outlineColor`),
        about: window.localStorage.getItem(`about`),
        service: window.localStorage.getItem(`service`),
        contact: window.localStorage.getItem(`contact`),
        custom: window.localStorage.getItem(`custom`),
        domain: window.localStorage.getItem(`domain`),
        domainName: window.localStorage.getItem(`domainName`),
        hosting: window.localStorage.getItem(`hosting`)
    };

    emailjs.send(`service_wmebdr5`, `template_f8aq32g`, contents).then(function() {alert(`Order Submitted`); window.location = `orderSubmitted.html`;});

}