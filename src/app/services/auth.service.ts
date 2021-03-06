import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { first } from 'rxjs/operators'
import { environment } from 'src/environments/environment';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user:any=null;

  constructor(public afAuth: AngularFireAuth) { }

  async login(email: string, password: string) {
    try {
      console.log(email,password)
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      return result.user;
    }
    catch (err) {
      throw err;
    }
  }

  async register(email: string, password: string) {
    const result = await this.afAuth.createUserWithEmailAndPassword(email, password).catch(err => { throw err });
    this.enviarMailRegistro();
    this.user = result.user;
    return result;
  }

  async logout() {
    try {
      await this.afAuth.signOut();
      this.user = null;
    }
    catch (err) {
      console.log(err);
    }
  }

  async getCurrentUser() {
    const user = await this.afAuth.authState.pipe(first()).toPromise()
    return user ? user : null
  }

  public enviarMailRegistro() {
    this.afAuth.currentUser.then(resp => {
      if (resp) {
        resp.sendEmailVerification({
          handleCodeInApp: true,
          url: 'http://localhost:4200/login'
        });
      }
    });
  }
}