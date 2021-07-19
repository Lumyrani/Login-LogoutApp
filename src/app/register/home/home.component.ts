import { Component, OnInit } from '@angular/core';
import {Home} from './home'
import {RegisterService} from '../register.service'
import {Router} from '@angular/router'
import{ AuthService } from '../auth.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private register:RegisterService,private router:Router,private auth:AuthService) { }
   userlist:Home[]=[]
   array=[]
  ngOnInit(): void {

    this.register.readHome().subscribe(data=>{
      this.userlist=data.map((doc)=>{
        return{
          id:doc.payload.doc.id,
          ...doc.payload.doc.data() as {}
        } as Home
      })
    })
  }
  home=new Home()
  save(){
   if(this.home.id==null){
     this.register.saveHome(this.home)
   }
   else{
     this.register.editHome(this.home)
   }

  }
  edit(array:Home){
this.register.editHome(array)
  }
   delete(array:Home){
    this.register.deleteHome(array)
   
  }

  logout(){
this.auth.logout()
this.router.navigate(["/register/logout"])
  }
  
}