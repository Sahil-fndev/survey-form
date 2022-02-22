
// function to get current year
function getCurrentYear() {
    let date = new Date();
    document.getElementById('year').innerHTML = date.getFullYear();
}

// grab form 
let form = document.getElementById('surveyForm');

// get header and footer of the page
let header = document.getElementById('header');
let footer = document.getElementById('footer');


//  button that open result model and close model
let mdbtn = document.getElementById('subbtn');
let closebtn = document.getElementById('closebtn')

// get  model
let model = document.getElementById('res_model');





// event  to show model 
mdbtn.onclick = function () {
    let fullName = document.getElementById('fullname').value;
    let email = document.getElementById('email').value;

    if (fullName == '' && email == '') {
        alert("Please provide your full name and email address.")
        console.log(fullName)
    }
    else {

        // show  result model
        model.style.display = "block"

        document.getElementById('name').innerText = fullName;
        // hide header, footer and form 
        form.style.display = "none"
        header.style.display = "none"
        footer.style.display = "none";
    }
}


//  event to hide model and reset form
closebtn.onclick = function () {
    // hide  result model
    model.style.display = "none"

    // show header, footer and form 
    form.style.display = "block";
    header.style.display = "block";
    footer.style.display = "block";

    // reset form 
    form.reset();
}