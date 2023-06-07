const { default: axios } = require("axios");

class AccountService {
    authenticated = false;
  
    idUser = Math.floor(Math.random() * 10);
  
    user = null;
  
    constructor() {}
  
    // Pobieranie liczby sekund, po jakiej użytkownik powinien zostać zalogowany
    getRandomLoginTime() {
      return (Math.floor(Math.random() * 10) % 5) + 5;
    }
    isAuthorizated(){
        this.authenticated === false ? false : true
    }
    checkIsUserLogin(){
        const interval = setInterval(() => {
            if (this.isAuthorizated() === false) {
                console.log("Użytkownik nie jest zalogowany");
            } else{
                console.log("Użytkownik jest zalogowany");
                this.getUserDetails()
                clearInterval(interval)
            }
        }, 1000)
    }
    loginUser(){
        setTimeout(() => {
            this.authenticated === "authenticated"
            console.log("Użytkownik został zalogowany");
        }, this.getRandomLoginTime() )
    }
    getUserDetails(){
        const dane = axios.get(`https://jsonplaceholder.typicode.com/users/${idUser}`)
        console.log();
    }
  }



