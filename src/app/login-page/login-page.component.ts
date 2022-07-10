import { Component, OnInit } from '@angular/core';
import { users } from '../main-page/files';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  username = '';
  password!: number;
  _link: any = '';

  checker(){
    if (this.username != '') {
      users.name = this.username;
    } else {
      alert('Please enter your name')
    }

    if (this.password == users.password){
      this._link = '/main-page';
    } else {
      alert('Invalid password')
    }
  }

}

