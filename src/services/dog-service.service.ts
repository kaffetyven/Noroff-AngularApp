import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DogService {
  private url = 'https://random.dog/woof.json';
  private conversionUrl = 'https://cors-anywhere.herokuapp.com/';

  constructor(private http: Http) { }

  getRandomDog(): Observable<any[]> {
    return this.http.get(this.conversionUrl + this.url).pipe(
      map(response => {        
        return response.json();
      })
    );
  }
}
