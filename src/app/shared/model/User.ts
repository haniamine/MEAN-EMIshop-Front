export default class User {
  _id: string;
  private _username: string;
  private password: string;
  private _mail: string;
  private role:string;

  constructor(username: string, password: string, mail: string) {
    this._username = username;
    this.password = password;
    this._mail = mail;
    this.role = "user"
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get mail(): string {
    return this._mail;
  }

  set mail(value: string) {
    this._mail = value;
  }



}


