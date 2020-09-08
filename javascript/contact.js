var form = document.querySelector("#contact-form");
form.addEventListener('submit', function(event) {
    event.preventDefault();
    emailjs.sendForm('gmail', 'contact_form', this);
    document.querySelector("#success").innerText= "We've recieved your mail, will contact back shortly!"

    setTimeout(()=>{
        document.querySelector("#success").innerHTML=" "
    },3000)
    form.reset();
});