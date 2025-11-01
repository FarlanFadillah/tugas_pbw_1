authentication();
// check authentication
function authentication(){
    const session = JSON.parse(sessionStorage.getItem('session'))
    if(!session) return goToLoginPage('User unauthenticated, please login first');

    // check if session is expired
    const current_date = new Date();
    const session_date = new Date(session.expires);

    if(session_date < current_date) {
        clearSession();
        goToLoginPage('session expired');
    }else {
        updateExpiresSession(session.id);
    }

    const data = JSON.parse(localStorage.getItem('ssd'));
    if(!data) return goToLoginPage('session data not found');

    if(Number(session.id) !== Number(data.ssid)) return goToLoginPage('ssid not match / user not authenticated');
}

function goToLoginPage(msg){
    localStorage.setItem('msg', msg);
    window.location.href = '/sitta-praktik/index.html';
}