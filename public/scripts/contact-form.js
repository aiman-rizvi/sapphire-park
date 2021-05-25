// once page is loaded, call function below to give button functionality
document.addEventListener("DOMContentLoaded", bindFormButton);

function bindFormButton() {
// do the below stuff if submit button is clicked for form
    document.getElementById("contact-form-submit").addEventListener("click", function (event) {
        // create new object to make HTTP request
        var req = new XMLHttpRequest();
        // grab data from form
        var first_name = document.getElementById("fname").value;
        var last_name = document.getElementById("lname").value;
        var email = document.getElementById("email").value;
        var subject = document.getElementById("subject").value;
        // open a POST request
        req.open("POST", "http://web.engr.oregonstate.edu/~zhangluy/tools/class-content/form_tests/check_request.php", true);
        // content header to let server know what we're sending
        req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        req.setRequestHeader("Accept", "*/*");
        // send the request with the data we are sending
        req.send(`firstName=${first_name}&lastName=${last_name}&email=${email}&subject=${subject}`);
        event.preventDefault(); // so we don't actually submit

        alert("Form has been sent!");
    });
}
