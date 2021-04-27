import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  
  checkPassword(password : string): any {
    if (password == "khalil") {
      return {valid : true};
    }  
    else {
      return {valid : false};
    }
  }
}
