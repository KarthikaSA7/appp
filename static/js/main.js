function contactForm() {
    document.getElementById("form").style.display = "block";
};

function formSubmit() {
    document.getElementById("submit").disabled = true;
    document.getElementById("submit").value = "Sending...";
    name = document.getElementById('name').value;
    email = document.getElementById('email').value;
    phone = document.getElementById('phone').value;
    message = document.getElementById('message').value;

    const payload = {
        name: name,
        email: email,
        phone: phone,
        message: message
    };

    fetch('/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer your-auth-token'
        },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (!response.ok) {
                alert('Network response was not ok ');
            }
            return response.json();
    })
    .then(data => {
        console.log(data);
        document.getElementById("greet").style.display = "block";
        document.getElementById("form").style.display = "none";
    })
};

function resumeDownload() {
    var link = document.createElement('a');
    link.href = 'static/images/Resume.pdf';
    link.download = "Santhi_Resume.pdf";
    link.click();
};

function projectOneDownload() {
    var link = document.createElement('a');
    link.href = 'static/images/project-1.pdf';
    link.download = "Revit-Plan.pdf";
    link.click();
};

function projectTwoDownload() {
    var link = document.createElement('a');
    link.href = 'static/images/project-2.pdf';
    link.download = "North-Facing-Plan.pdf";
    link.click();
};

function projectThreeDownload() {
    var link = document.createElement('a');
    link.href = 'static/images/project-3.pdf';
    link.download = "North-Facing-Plan.pdf";
    link.click();
};
