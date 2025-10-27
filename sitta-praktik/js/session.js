
function createSession(data){
    const date = new Date();
    date.setMinutes(date.getMinutes() + 15);

    console.log(date);

    const session_id = Math.ceil(Math.random(1) * 10000000)
    sessionStorage.setItem('session', JSON.stringify({
        id : session_id,
        expires : date
    }))

    localStorage.setItem('ssd', JSON.stringify({
        ssid : session_id,
        ...data,
        isAuthenticated : true
    }))
}

function updateExpiresSession(id){
    const date = new Date();
    date.setMinutes(date.getMinutes() + 15);
    sessionStorage.setItem('session', JSON.stringify({
        id : id,
        expires : date
    }))
}

function clearSession(){
    localStorage.removeItem('session');
    sessionStorage.removeItem('my_session');
    localStorage.removeItem('msg');
}

