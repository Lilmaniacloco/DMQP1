import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
 const token = localStorage.getItem("counrtyPass");
 req = req.clone(
  {
  setHeaders:
  {
    Authorization:`Bearer ${token}`

  }
 
 });
 
  return next(req);
};