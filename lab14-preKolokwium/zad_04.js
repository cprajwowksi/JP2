class AccountService {
    authenticated = false;
  
    idUser = Math.floor(Math.random() * 10);
  
    user = null;
  
    constructor() {}
  
    // Pobieranie liczby sekund, po jakiej użytkownik powinien zostać zalogowany
    getRandomLoginTime() {
      return (Math.floor(Math.random() * 10) % 5) + 5;
    }
  }

  