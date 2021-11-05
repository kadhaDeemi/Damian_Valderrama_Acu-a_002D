import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import firebase from 'firebase/compat/app';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private firestore: AngularFirestore,
    private afaauth: AngularFireAuth) { }

  async create(collection, dato) {
    try {
      return await this.firestore.collection(collection).add(dato);
    } catch (error) {
      console.log("error en: create", error)
    }
  }
  async getAll(collection) {
    try {
      return await this.firestore.collection(collection).snapshotChanges();
    } catch (error) {
      console.log("error en: getAll", error)
    }
  }

  async delete(collection, id) {
    try {
      return await this.firestore.collection(collection).doc(id).delete();
    } catch (error) {
      console.log("error en: delete", error)
    }
  }
  async getById(collection, id) {
    try {
      return await this.firestore.collection(collection).doc(id).get();
    } catch (error) {
      console.log("error en: getById", error)
    }
  }

  async update(collection, id, dato) {
    try {
      return await this.firestore.collection(collection).doc(id).set(dato);
    } catch (error) {
      console.log("error en: update", error)
    }
  }



  
  async register(email: string, password: string, nombre:string) {
    try {
      return await this.afaauth.createUserWithEmailAndPassword(email, password).then(res=>{
        console.log(res.user.uid);
        const uid = res.user.uid
        this.firestore.collection('usuarios').doc(res.user.uid).set({
          nombre: nombre,
          email: email,
          password: password,
          uid: uid
        }) 
      })
    } catch (err) {
      console.log("Error en register:", err);
      return null;
    }
  }

  async login(email: string, password: string) {
    try {
      return await this.afaauth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      console.log("Error en login:", err);
      return null;
    }
  }

  async loginWithGoogle(email: string, password: string) {
    try {
      return await this.afaauth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    } catch (err) {
      console.log("Error en login con google:", err);
      return null;
    }
  }

  getUserLogged() {
    return this.afaauth.authState;
  }

  logout() {
    this.afaauth.signOut();
  }


}
