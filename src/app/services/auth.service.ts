import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { HttpClient } from "@angular/common/http";
import { UserInterface } from "../interfaces/UserInterface";
import store from "store";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  public user: UserInterface;
  public apiToken: string = store.get('apiToken');
  public errors: any[] = [];

  constructor(private apiService: ApiService, private http: HttpClient) {}

  public login(payload: FormData) {
    const url = this.apiService.getUrl("login");
    return this.http.post<UserInterface>(url, payload);
  }

  public getLoggedInUser() {
    const url = this.apiService.getUrl("userAuth");
    return this.http.get<UserInterface>(url);
  }

  public setUser(user: UserInterface) {
    // console.log(user);
    // console.log(user.id);
    this.user = user;
    this.apiToken = user.token;
    store.set("apiToken", user.token);
  }

  public logout() {
    this.user = {};
    this.apiToken = undefined;
    this.errors = [];
    store.remove("apiToken");
  }

  public setErrors(error) {
    if (
      error.errors &&
      "object" == typeof error.errors
    ) {
      this.errors = error.errors;
    } else {
      this.errors = [];
    }
  }
  changePassword(payload) {
    const url = this.apiService.getUrl("auth/emp-pass-reset-after-login");
    return this.http.post<UserInterface>(url, payload);
  }

  resetPasswor(em_code) {
    const url = this.apiService.getUrl("auth/emp-pass-reset-by-admin");
    return this.http.post<UserInterface>(url, em_code);
  }
}
