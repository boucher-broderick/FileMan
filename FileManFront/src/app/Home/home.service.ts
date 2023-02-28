import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ContactModel } from '../Models/contact_form';
import { map } from 'rxjs/operators'
import { HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  private mailApi = 'https://mailthis.to/codeninja'

  constructor(private http: HttpClient) {  }

  
  private currentPage: BehaviorSubject<number> = new BehaviorSubject(0);
  PostMessage(input: any) {
    return this.http.post(this.mailApi, input, { responseType: 'text' })
      .pipe(
        map(
          (response) => {
            if (response) {
              return response;
            }else{
              return null;
            }
          },
          (error: any) => {
            return error;
          }
        )
      )
  }

  getCurrentPage(): Observable<number> {
      return this.currentPage.asObservable();
  }

  setCurrentPage(page: number ) {
      this.currentPage.next(page);
  }


  
}
