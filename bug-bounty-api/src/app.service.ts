import { Injectable } from '@nestjs/common';
import {throwError} from "rxjs";

@Injectable()
export class AppService {

  
  checkPassword(password : string): any {
    if (password === "khalil") {
      return {valid : true};
    }  
    else {
      throwError("Error");
    }
  }
}
