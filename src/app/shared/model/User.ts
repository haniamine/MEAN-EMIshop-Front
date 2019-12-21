export default class User {
  _id: string;
  private _username: string;
  private password: string;
  private _mail: string;
  private _role: string;

  constructor(username: string, password: string, mail: string, role: string) {
    this._username = username;
    this.password = password;
    this._mail = mail;
    this._role = role;
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

  get role(): string {
    return this._role;
  }

  set role(value: string) {
    this._role = value;
  }
}


