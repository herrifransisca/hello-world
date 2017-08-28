
import { ErrorHandler } from '@angular/core/core';

export class AppErrorHandler implements ErrorHandler {
  handleError(error) {
    alert('An unexpected error occurred.');
    console.log(error);
  }
}
