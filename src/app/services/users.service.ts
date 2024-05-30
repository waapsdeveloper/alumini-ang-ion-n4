import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  isAuthenticated(){
    const t = localStorage.getItem('token')
    return t ? true : false;
  }

  setToken(token: string){
    localStorage.setItem('token', token);
  }

  setUser(user: any){
    const u = JSON.stringify(user)
    localStorage.setItem('user', u)
  }

  getUser(){

    const str = localStorage.getItem('user')
    if(!str){
      return null;
    }

    const u = JSON.parse(str)
    return u;
  }
}
