
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class CommunicatorService {

  private isShowLoad = false;
  private counterLoading = 0;
  private requests: boolean[] = [];

  constructor(
    private http: HttpClient,
  ) {
  }

  http_post(url: string, body: any, tokenService?: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: (tokenService === null || tokenService === undefined) ? '' :  tokenService
    });
    this.showLoad();

    return this.http.post(url, body, { headers }).pipe(
      tap(
        () => {
          this.hideLoad();
        },
        error => {
          this.hideLoad();
          throwError(error);
        },
      ),
    );
  }

  private showLoad(): void {
    this.counterLoading++;
    if (this.isShowLoad) { return; }
    this.isShowLoad = true;
    this.requests.push(this.isShowLoad);
  }

  private hideLoad(): void {
    this.counterLoading--;
    this.requests.splice(0, 1);
    if (this.requests.length === 0 && this.counterLoading === 0) {
      this.isShowLoad = false;
    }
  }
}

export type WebRequestMethod =
  'GET' |
  'POST' |
  'PUT' |
  'DELETE' |
  'OPTIONS' |
  'HEAD' |
  'PATCH';

export interface IWebRequestOptions {
  method?: string;
  search?: string;
  params?: string | URLSearchParams;
  headers?: Headers | null;
  body?: any | {};
  withCredentials?: boolean | null;
  responseType?: XMLHttpRequestResponseType | null;
  op?: string;
}
