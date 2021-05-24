document.addEventListener("DOMContentLoaded", bindFormButton);

function bindFormButton() {

// do the below stuff if submit button is clicked for second form
    document.getElementById("contact-form-submit").addEventListener("click", function (event) {
        var req = new XMLHttpRequest();                                       // create new object to make HTTP request
        var first_name = document.getElementById("fname").value;            // grab data from form
        var last_name = document.getElementById("lname").value;
        var email = document.getElementById("email").value;
        var subject = document.getElementById("subject").value;
        req.open("POST", "http://web.engr.oregonstate.edu/~zhangluy/tools/class-content/form_tests/check_request.php", true);  // open a POST request
        req.setRequestHeader("Access-Control-Allow-Origin", "*");          // content header to let server know what we're sending
        req.setRequestHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");          // content header to let server know what we're sending
        req.setRequestHeader("Access-Control-Allow-Headers", "Origin, Content-Type, Accept, Authorization, X-Request-With");          // content header to let server know what we're sending
        req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");          // content header to let server know what we're sending
        req.setRequestHeader("Accept", "*/*");



        // do below stuff after we get a response from our request
        req.addEventListener("load", function () {
            console.log("form sent and response received!")
        });

        req.send(`firstName=${first_name}&lastName=${last_name}&email=${email}&subject=${subject}`);     // send the request with the data we are sending
        event.preventDefault();                                       // so we don't actually submit
    });
}