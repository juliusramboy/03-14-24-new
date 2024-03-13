const username = document.getElementById('username');
const password = document.getElementById('password');
const auth = document.getElementById('auth');
const signform = document.querySelector('.sign-in-form');


signform.addEventListener('submit', (e) => {
    if (username.value === '' || username.value === null ){
        auth.innerHTML = `Enter your username`;
        auth.style.color = "red";
        e.preventDefault()
    }
    else if  (password.value.length == 0 ){
        auth.innerHTML = `Enter your Password`;
        auth.style.color = "red";
        e.preventDefault()
    }
    else if (!password.value.match(/(?=.*?[A-Z]{4,})(?=.*?[0-9])/)){
        auth.innerHTML = `Password must be At least 4 upper case and 1 number`;
        auth.style.color = "red";
        e.preventDefault()
    }

    else if (password.value.length <= 6 ){
        auth.innerText =`Password must be 6 characters`;
        auth.style.color = "red";
        e.preventDefault()
    }
  
    else if (password.value.length >= 13 ){
        auth.innerText = `Password must at least 12 characters`;
        auth.style.color = "red";
        e.preventDefault()
    }

    else if (student_num.value === '' || student_num.value === null){
        auth.innerText = `Please Enter a Student Number`;
        auth.style.color = "red";
        e.preventDefault()
    }else{
        return true;
    }

    
});

