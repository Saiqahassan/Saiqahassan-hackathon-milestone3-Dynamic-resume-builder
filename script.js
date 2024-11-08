var form = document.getElementById('resume-form');
var resumeGenerateElement = document.getElementById('resume-generate');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var university = document.getElementById('university').value;
    var college = document.getElementById('college').value;
    var school = document.getElementById('school').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Dynamically generate the resume
    var resumeBuilder = "\n    <h2><b>Generated Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b>".concat(name, "</p>\n    <p><b>Email:</b>").concat(email, "</p>\n    <p><b>Phone:</b>").concat(phone, "</p>\n    <p><b>Address:</b>").concat(address, "</p>\n\n    <h3>Education</h3>\n    <p><b>University:</b>").concat(university, "</p>\n    <p><b>College:</b>").concat(college, "</p>\n    <p><b>School:</b>").concat(school, "</p>\n\n    <h3>Work Experience</h3>\n    <p>").concat(experience, "</p>\n    \n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n\n    ");
    if (resumeGenerateElement) {
        resumeGenerateElement.innerHTML = resumeBuilder;
    }
    else {
        console.error('Something is missing.');
    }
});
