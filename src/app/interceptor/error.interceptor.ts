import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { CustomerService } from '../services/customer.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {

  const customerService = inject(CustomerService)
  return next(req).pipe(
    catchError((error:HttpErrorResponse)=> {
      if(error.status === 401) { // kalau unauhtorized langsung refresh token
        const isContinue = confirm("Are you sure want to continue?")
        if(isContinue) {
          customerService.tokenExpired$ .next(true)
        } 
      }
      return throwError(error)
    })
  );
};
