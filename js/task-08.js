const formRef = document.querySelector('.login-form')
const submitButtonRef = document.querySelector('button[type="submit"]')



formRef.addEventListener('submit', onFormSubmit)


function onFormSubmit(event) {
    event.preventDefault()

    const formRefs = event.currentTarget.elements;

    const email = formRefs.email.value;
    const password = formRefs.password.value

    if(email === "" || password === "") {
        alert("All fields must be filled!")
        return
    }

    const formRefData = {
        email,
        password,
    }
    
    console.log(formRefData)
}