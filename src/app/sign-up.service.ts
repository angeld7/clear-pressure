import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http:HttpClient) { }

  signUp(user:any) {
    this.http.post("192.168.10.108:5000/sign_up", user).subscribe();
  }
}
