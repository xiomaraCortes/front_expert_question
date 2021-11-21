import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {CommunicatorService} from './communicator.service';
import {environment} from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class NetworkMachineService {

  constructor(private communicatorService: CommunicatorService) { }

  getMachineNetwork(input: Array<string>, e: number, knowledgeFactor: number): Observable<any>  {
    const body: any = {
      input,
      e,
      knowledgeFactor
    };
    return this.communicatorService.http_post(environment.URL_PRODUCTION + 'network/', body);
  }

}
