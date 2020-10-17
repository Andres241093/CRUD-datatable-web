import { Injectable, ErrorHandler, Injector, NgZone } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';


@Injectable({
	providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {

	constructor(private readonly zone: NgZone) { }

	handleError(error: Error | HttpErrorResponse) {
		if (error instanceof HttpErrorResponse) {
			var errors: Array<string> = new Array<string>();

			for (const prop in error.error['errors']) {
					errors.push(error.error['errors'][prop])
			}
			errors.reverse();
			for (var i = 0; i < errors.length; i++) {
				this.zone.run(() => {
					alert(errors[i]);
				});
			}
		} else {
			throw error;
		}
	}
}
