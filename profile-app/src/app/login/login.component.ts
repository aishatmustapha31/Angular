import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = "";
  password: string = "";
  key: string = "users";


  constructor() { }

  ngOnInit(): void {
  }

  login() {

    if (this.email === "") {
      alert("Enter your email address");
      return;
    }

    if (this.password === "") {
      alert("Enter your password");
      return;
    }

    let users_string1 = localStorage.getItem(this.key);
    let users_string2: string = String(users_string1);

    let users_list: { Id: number, Name: string, password: string, email: string }[] = JSON.parse(users_string2);

    let mainUser: { Id: number, Name: string, password: string, email: string }={Id:0,Name:"",password:"",email:""};

    users_list.forEach(us => {

      let isCorrentEmail = us.email.toLocaleLowerCase() === this.email.toLocaleLowerCase();
      let isCorrectPassword = us.password === this.password;

      if (isCorrentEmail && isCorrectPassword) {
        mainUser = us;
        return;
      }

    });

    if(mainUser.Id === 0){
      alert("Incorrect email or password");
    }else{
      let login_user_key="login_user";
      let mainUser_string = JSON.stringify(mainUser);
      localStorage.setItem(login_user_key,mainUser_string);

      location.href="/dashboard";
    }



  }

}
