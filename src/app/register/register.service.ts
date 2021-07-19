import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore'
import {Home} from './home/home'


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private store:AngularFirestore) { }

  saveHome(home:Home){
    console.log(home)
    this.store.collection("homes").add({...home})

  }
  readHome(){
    return this.store.collection("homes").snapshotChanges()
  }
  editHome(home:Home){
this.store.doc("homes/").update(home)
  }
  deleteHome(home:Home){
    this.store.doc("homes/"+home.id).delete()
  }
}