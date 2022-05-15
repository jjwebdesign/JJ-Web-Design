// JJWebDesign
// * /  .\   *
// * /  =__| * 
// * /    || *
// * * * * * *

(function(){ emailjs.init("K6rZs5jDpa6e5lj2Y"); })();

function sendMessage() {

    let fromEmail  = document.getElementById(`emailInput`).value;
    let inquiry = document.getElementById(`inquiryTextbox`).value;

    if ((fromEmail == ``))
    {
        alert(`Email can not be left blank`);
        return;
    }

    if ((inquiry == ``))
    {
        alert(`Message can not be left blank`);
        return;
    }

    let contents = {

        email: fromEmail,
        message:inquiry

    };

    emailjs.send(`service_wmebdr5`, `template_f7gguqf`, contents).then(function() {alert(`Message Sent`)});

}