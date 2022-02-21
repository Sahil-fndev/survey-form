
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
    // show  result model
    model.style.display = "block"


    // hide header and form 
    form.style.display = "none"
    header.style.display = "none"
   

    //  set footer position fixed at bottom of the page
    footer.style.position = "fixed";
    footer.style.bottom = 0;
}

//  event to hide model and reset form
closebtn.onclick = function () {
    // hide  result model
    model.style.display = "none"

    // show header and form 
    form.style.display = "block"
    header.style.display = "block"
    form.reset();

    //  set footer position fixed at bottom of the page
    footer.style.position = "inherit";
    footer.style.bottom = "inherit";
}