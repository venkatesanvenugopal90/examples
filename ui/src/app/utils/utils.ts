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
        if (error.error.type == "error") {
            // client-side error
            return error.message;
        } else {
            // server-side error
            return 'Internal Server Error: '.concat(error.error.message);
        }
    }
}