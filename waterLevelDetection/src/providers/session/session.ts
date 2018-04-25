import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the SessionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SessionProvider {
  session: any;
  constructor() {
    // 0 indicates logged out user
    this.session = 0;
  }

  setSessionIdentifier(identifier) {
    this.session = identifier;
  }

  getSessionIdentifier() {
    return this.session;
  }

}
