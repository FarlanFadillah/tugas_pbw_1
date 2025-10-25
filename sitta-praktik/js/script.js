const login_form = document.querySelector('#login-form');

login_form.addEventListener('submit', (event)=>{
    event.preventDefault();
    const formData = new FormData(event.target);

    const user = dataPengguna.find(user => {
        return user.email === formData.get('email') 
        && user.password === formData.get('password')
    })

    if(user) window.location.href = '/sitta-praktik/dashboard.html'
})