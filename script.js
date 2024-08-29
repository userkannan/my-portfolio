function myfun(){
    alert("hello")
}

// ############# Contact Form Send email Emailjs ###############
function sendEmail() {
    var params = {
        Name: document.getElementById("Name").value ,
        Email: document.getElementById("Email").value ,
        Phone: document.getElementById("Phone").value ,
        Message: document.getElementById("Message").value ,
        
    }
    const serviceID = "service_u2gnc9o"
    const templateID = "template_mu0dbyw"

    emailjs.send(serviceID,templateID,params)
    .then(
        res =>{
            document.getElementById("Name").value = "";
            document.getElementById("Email").value = "";
            document.getElementById("Phone").value = "";
            document.getElementById("Message").value = "";
            console.log(res);
            alert("Your Message Send Successfully")
        }
    )
    .catch(err=>console.log(err));
}



// ############ skils section #################


