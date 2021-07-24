import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  public serverUri = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getNextNTaggerCandidate() {
    return this.http.get(this.serverUri + '/n-tagger');
  }

  updateReference(ref, update) {
    return this.http.put(this.serverUri + '/n-tagger/' + ref, update, { headers: { 'Content-Type': 'application/json' } });
  }

}
