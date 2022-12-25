function validateForm(){

    let fullName = document.querySelector('#fullname').value
    let fullNameSize = fullName.length
    
    let phoneNumber = document.querySelector('#phone').value
    let phoneNumberSize = phoneNumber.length

    let emailId = document.querySelector('#email').value
    let emailFormat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

    if(fullNameSize <= 3){
        document.querySelector('.error_message').innerText = 'Name is required with minium 4 characters!!'

    } else if(phoneNumberSize !== 10){
        document.querySelector('.error_message').innerText = 'Phone number should be 10 digit'

    }else if(!emailId.match(emailFormat)){
        document.querySelector('.error_message').innerText = 'This is not valid email id'
    }else{
        console.log('not matching...')
        document.querySelector('.error_message').innerText = ''
        document.querySelector('.success_message').innerText = 'Created Successfully'
    }

}


