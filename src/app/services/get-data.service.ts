import { Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class GetDataService {
  url = '../../assets/employees.json';
  constructor(private http: Http) { }
  get_employees(){
    return this.http.get(this.url).pipe(
    .map((response: Response) => response.json()));
    // return 4;
  }
}
