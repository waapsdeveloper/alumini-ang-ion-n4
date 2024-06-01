import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  isProfileComplete(){
    const u = this.getUser();
    if(!u){
      return false;
    }




    return false;

  }

  isAuthenticated(){
    const t = localStorage.getItem('token')
    return t ? true : false;
  }

  setToken(token: string){
    localStorage.setItem('token', token);
  }

  logout(){
    localStorage.removeItem('token');
    window.location.reload()
  }

  setUser(user: any){
    localStorage.removeItem('user')
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
