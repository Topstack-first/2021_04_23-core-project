import { AppConfigService } from '../config/app-config-service';

export class BaseService {
  public  getBaseUrl(path: string): string {
    return AppConfigService.config.API_BASE_URL;
  }
}
