import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

export module ApiHelper {
  export function extractData(res: any) {
    let body = res;
    return body;
  }

  export function onFail(err: HttpErrorResponse | any) {
    return throwError(console.error(err.error));
  }
}
