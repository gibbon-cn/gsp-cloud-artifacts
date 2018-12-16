import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GetrouteconfigService {
  private API_PATH = 'assets/route_config.json';

  constructor(private http: HttpClient) { }

  getRouteConfig() {
    return this.http.get(this.API_PATH, {});
  }
}
