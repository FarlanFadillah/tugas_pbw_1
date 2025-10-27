const login_form = document.querySelector('#login-form');

const msg = localStorage.getItem('msg');
if(msg && msg.length > 0) document.querySelector('.message').innerHTML = `<p>${msg}</P>`;

clearSession();
login_form.addEventListener('submit', (event)=>{
    event.preventDefault();
    const formData = new FormData(event.target);

    const user = dataPengguna.find(user => {
        return user.email === formData.get('email') 
        && user.password === formData.get('password')
    })
    if(!user) return alert('email/password is incorrect'); 

    createSession({name : user.name, email : user.email});
    window.location.href = '/sitta-praktik/dashboard.html'
})

