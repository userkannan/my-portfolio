function myfun(){
    alert("hello")
}

// ############# Contact Form Send email Emailjs ###############
function sendEmail(event) {
    event.preventDefault(); // Prevent form submission

    var params = {
        Name: document.getElementById("Name").value,
        Email: document.getElementById("Email").value,
        Phone: document.getElementById("Phone").value,
        Subject: document.getElementById("Subject").value,
        Message: document.getElementById("Message").value,
    }

    const serviceID = "service_vqird8r";
    const templateID = "template_mu0dbyw";

    emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
            // Clear form fields after successful submission
            document.getElementById("Name").value = "";
            document.getElementById("Email").value = "";
            document.getElementById("Phone").value = "";
            document.getElementById("Subject").value = "";
            document.getElementById("Message").value = "";
            console.log(res);
            alert("Your message was sent successfully!");
        })
        .catch(err => {
            console.log(err);
            alert("Failed to send your message. Please try again.");
        });
}




// ############ skils section #################


