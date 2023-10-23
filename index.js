const showPaasword=document.getElementsByClassName('show');
const hidePaasword=document.getElementsByClassName('hide');
const show_pass=document.getElementById('password');
const con_pass=document.getElementById('confirm_pass');

showPaasword[0].addEventListener('click',function(){
    show_pass.type='text';
    showPaasword[0].style.display= 'none';
    hidePaasword[0].style.display= 'block';
})
hidePaasword[0].addEventListener('click',function(){
    show_pass.type='password';
    showPaasword[0].style.display= 'block';
    hidePaasword[0].style.display= 'none';
})
showPaasword[1].addEventListener('click',function(){
    con_pass.type='text';
    showPaasword[1].style.display= 'none';
    hidePaasword[1].style.display= 'block';
})
hidePaasword[1].addEventListener('click',function(){
    con_pass.type='password';
    showPaasword[1].style.display= 'block';
    hidePaasword[1].style.display= 'none';
})
// validation
const uname=document.getElementById('uname');
const email=document.getElementById('email');
const password=document.getElementById('password');
const con_password=document.getElementById('confirm_pass');
const login=document.getElementById('signUp');

const setError=(input)=>{
    const form_group=input.parentElement;
    form_group.classList.add('error');
    form_group.classList.remove('success');
}
const setSuccess=(input)=>{
    const form_group=input.parentElement;
    form_group.classList.add('success');
    form_group.classList.remove('error');
}

const isEmail=(email)=>{
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

uname.addEventListener('keyup',function(){
    const unameValue=uname.value.trim();
    (unameValue==='') ? setError(uname) :setSuccess(uname);
})
email.addEventListener('keyup',function(){
    const emailValue=email.value.trim();
    (emailValue==='') ? setError(email) :(!isEmail(emailValue)) ? setError(email) : setSuccess(email);
})
password.addEventListener('keyup',function(){
    const passValue=password.value.trim();
    (passValue==='') ? setError(password) : (passValue.length <8) ? setError(password) : setSuccess(password);
})
con_pass.addEventListener('keyup',function(){
    const passValue=password.value.trim();
    const conValue=con_pass.value.trim();
    (conValue==='') ? setError(con_pass) : (conValue!==passValue) ? setError(con_pass) : setSuccess(con_pass);
})

login.addEventListener('click',function(){
    if(uname.value ===''){
        setError(uname);
    }
    if(email.value ===''){
        setError(email);
    }
    if(password.value ===''){
        setError(password);
    }
    if(con_pass.value ===''){
        setError(con_pass);
    }
    
    if(uname.value !==''){
        if(email.value !==''){
            if(password.value !==''){
                if(con_pass.value !==''){
                    window.location.assign('signUp.html');
                }
            }
        }
    }
})
console.log(login)





