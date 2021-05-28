import { Injectable } from '@angular/core';

import { AppConfig } from './app-config';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AppConfigService {
  public static config: AppConfig = 
  {
    API_BASE_URL: "https://localhost:5001",
    redirectUrl: "http://localhost:4200" 
  } as AppConfig;

  private _config = new BehaviorSubject<AppConfig>(AppConfigService.config);
  public static get<T extends keyof AppConfig>(key: T): AppConfig[T] {
    return this.config[key];
  }

  public get config$() {
    return this._config.asObservable();
  }

  public static getApiUrl() {
    return this.config.API_BASE_URL;
  }
  public get$(key: string) {
    return this.config$.pipe(map(c => c[key]));
  }
  public loadConfig() {
    this._config.next(AppConfigService.config);
  }
}
