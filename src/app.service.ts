import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Api - Oráculo Beats, consulte a documentação em /docs.';
  }
}
