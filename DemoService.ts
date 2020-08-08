import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }

  getLoginDetails(username, password) {
    return this.http.get("http://localhost:3000/login?username="+username+"&password="+password);
  }
  getregDetails(name, username, password, gender) {
      console.log
    return this.http.get("http://localhost:3000/reg?name="+name+"&username="+username+"&password="+password+"&gender="+gender);
  }
}