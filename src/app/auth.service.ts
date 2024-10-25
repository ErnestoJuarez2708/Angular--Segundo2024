import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string = ''
  private user: string = ''

  constructor() { }

  login(){
    this.token = '123ABC'
    this.user = 'test@gmail.com'
    return this.token
  }

  logout(){
    this.token = ''
    this.user = ''
  }

  getUser(){
    return this.user
  }
}
