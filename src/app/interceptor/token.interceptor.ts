import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => { // interceptor adalah penengah antara api dan aplikasi web
  const token = localStorage.getItem("angular19Token")
  const newReq = req.clone({
    setHeaders:{
      Authorization:`Bearer ${token}` // properti di header untuk mengirim token
    }
  })
  return next(newReq);
};
