import { Component, OnInit } from '@angular/core';
import {Logout} from './logout'
import {Router} from '@angular/router'
import {RegisterService} from '../register.service'
import {Home} from '../home/home'

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router:Router,private register:RegisterService) { }

 
  model=new Logout()
  
  email:any
  pass:any
  returnURL:string=""
    loginsuccess:string=""
    userlist:Home[]=[]
  
    ngOnInit(): void {
    
    this.register.readHome().subscribe(data=>{
      this.userlist=data.map((doc)=>{
        return{
          id:doc.payload.doc.id,
          ...doc.payload.doc.data() as {}
        } as Home
      })
    })
  
    this.returnURL="register/home"
  }
   view(){
     console.log(this.userlist)
   } 
  
  
  
  
  login(){
    this.email=this.model.email
    this.pass=this.model.password
  
    
    for(let i of this.userlist){
      if(this.email==i.email && this.pass == i.pass){
       this.loginsuccess="true"
  
       localStorage.setItem("isLogged","true")
       localStorage.setItem("email",this.model.email)
       this.router.navigate([this.returnURL])
  
      }
    
  
  
    // else
    // {this.loginsuccess=="false"
    //   alert("Login Failed")
    //}
  
  }
  
  }}