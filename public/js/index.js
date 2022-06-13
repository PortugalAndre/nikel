const myModal = new bootstrap.Modal("#register-modal");
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");

checklogged();


//LOGAR NO SISTEMA
document.getElementById("login-form").addEventListener("submit",function(e){
    e.preventDefault();

    const email = document.getElementById("email-input").value;
    const password = document.getElementById("password-input").value;
    const checkSession = document.getElementById("session-check").checked;

    const account = getAccount(email);

    if(!account) {
        alert("Opa! Da uma conferida no seu usuário ou na sua senha.");
        return;
    }

    if(account) {
        if(account.password !== password) {
            alert("Opa! Da uma conferida no seu usuário ou na sua senha.");
            return;    
        }
        
        saveSession(email, checkSession); 
        
        window.location.href = "home.html"; 
    }

    

    

   

});

//CRIAR CONTA
document.getElementById("creat-form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const email = document.getElementById("email-creat-input").value;
    const password = document.getElementById("password-creat-input").value;

    if(email.length < 8) {
        alert("Preencha o campo com um e-mail válido.");
        return;
    }

    if(password.length < 6) {
        alert("Crie uma senha de no mínimo 6 dígitos.");
        return;
    }

    saveAccount({
        login: email,
        password: password,
        transactions: []
    });

    myModal.hide();

    alert("Oba! sua conta foi criada com sucesso.")

});

function checklogged() {
    if(session) {
        sessionStorage.setItem("logged", session);
        logged = session;
    }

    if(logged) {
        saveSession(logged, session);

        window.location.href = "home.html";
    }
}

function saveAccount(data) {
    localStorage.setItem(data.login, JSON.stringify(data));
    
}

function saveSession(data, saveSession){
    if(saveSession) {
        localStorage.setItem("session", data); 
    }

    sessionStorage.setItem("logged", data);
}

function getAccount(key) {
    const account = localStorage.getItem(key);

    if(account) {
        return JSON.parse(account);
    }

    return "";
}


    

