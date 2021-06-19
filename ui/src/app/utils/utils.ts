import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

export class Utils {

  static handleHttpError(error) {
    let errorMsg: string;
    if (error.error instanceof ErrorEvent) {
        errorMsg = `Error: ${error.error.message}`;
    } else {
        errorMsg = Utils.getServerErrorMessage(error);
    }
    return throwError(errorMsg);
  }

  static getServerErrorMessage(error: HttpErrorResponse): string {
        switch (error.status) {
            case 404: {
                return `Not Found: ${error.message}`;
            }
            case 500: {
                return `Internal Server Error: ${error.message}`;
            }
            default: {
                return `Unknown Server Error: ${error.message}`;
            }
        }
  }
}