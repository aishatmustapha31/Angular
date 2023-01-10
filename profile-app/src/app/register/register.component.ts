import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: { Id: number, Name: string, password: string,email:string };
  key: string = "users";

  constructor() {
    this.user = { Id: 0, Name: "", password: "",email:"" };
  }

  ngOnInit(): void {
  }

  register() {
        
    if (this.user.email === "") {
      alert("Please enter your email");
      return;
    }

    if (this.user.Name === "") {
      alert("Please enter the user name");
      return;
    }

    if (this.user.password === "") {
      alert("Please enter your password");
      return;
    }


    this.user.Id = this.generateId();
    this.addUserToStorage(this.user);

    alert(`${this.user.Name} was successfully registered. `);
    location.href ="/login";

  }

  addUserToStorage(userObject: { Id: number, Name: string, password: string,email:string }) {

    let users_string = localStorage.getItem(this.key);

    if (users_string === null) {

      let users: { Id: number, Name: string, password: string ,email:string}[] = [{ Id: 0, Name: "", password: "" ,email:''}];
      users.push(userObject);
      users_string = JSON.stringify(users);
      localStorage.setItem(this.key, users_string);

    } else {

     let  users_list: { Id: number, Name: string, password: string,email:string }[] = JSON.parse(users_string);
     users_list.push(userObject);
     users_string = JSON.stringify(users_list);
     localStorage.setItem(this.key, users_string);
    }
  }

  generateId(): number {
    let id = 0;
    let randId = Math.random() * 9999999;
    id = Math.ceil(randId);
    return id;
  }

}
