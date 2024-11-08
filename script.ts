const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeGenerateElement = document.getElementById('resume-generate') as HTMLDivElement;

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const address = (document.getElementById('address') as HTMLInputElement).value
    const university = (document.getElementById('university') as HTMLInputElement).value
    const college = (document.getElementById('college') as HTMLInputElement).value
    const school = (document.getElementById('school') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value

    // Dynamically generate the resume

    const resumeBuilder = `
    <h2><b>Generated Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b>${name}</p>
    <p><b>Email:</b>${email}</p>
    <p><b>Phone:</b>${phone}</p>
    <p><b>Address:</b>${address}</p>

    <h3>Education</h3>
    <p><b>University:</b>${university}</p>
    <p><b>College:</b>${college}</p>
    <p><b>School:</b>${school}</p>

    <h3>Work Experience</h3>
    <p>${experience}</p>
    
    <h3>Skills</h3>
    <p>${skills}</p>

    `

    if(resumeGenerateElement){
        resumeGenerateElement.innerHTML = resumeBuilder;

    }else {
        console.error('Something is missing.')
    }

});