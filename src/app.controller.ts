import { Get, Controller, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('index')
  rootCertificates() {
    return { message: 'Hello world!' };
  }
}
