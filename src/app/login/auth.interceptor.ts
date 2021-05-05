import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { tap } from "rxjs/operators";
import { Router } from "@angular/router";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private router: Router) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (localStorage.getItem('user') != null) {
            const clonedReq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + localStorage.getItem('user'))
            });
            return next.handle(clonedReq).pipe(
                tap(
                    succ => { },
                    err => {
                        if (err.status == 401) {
                            localStorage.removeItem('user');
                            localStorage.removeItem('login')
                            this.router.navigateByUrl('/');
                        }
                        // else if (err.status == 403) {
                        //     // this.router.navigateByUrl('/home/err404');
                        // }
                        // else if (err.status == 409) {
                        //     if(err.error.Message != null || err.error.Message != undefined)
                        //     this.tosterservic.warning('', err.error.Message)
                        //     //else
                        //    // this.tosterservic.warning('', 'يجب التأكد من ادخال المعطيات')
                        // }
                        // else if (err.status == 400) {
                        //     if(err.error.Message != null || err.error.Message != undefined)
                        //     this.tosterservic.warning('', err.error.Message)
                        //     else
                        //     this.tosterservic.warning('', 'يجب التأكد من ادخال المعطيات')

                        // }
                        // else if (err.status == 404) {
                        //     if (err.error.Message != null || err.error.Message != undefined) {
                        //         this.Appcomponent.DisabledToster.forEach(item=>{
                        //             if (item==true) {
                        //               this.Appcomponent.DisabledToster=this.Appcomponent.DisabledToster.filter(d=>d!=item)
                        //               return
                        //             }
                        //                 this.tosterservic.warning('', err.error.Message)
                                   
                        //         })
                        //     }
                        // }
                        
                        // else if (err.status == 0)
                        //     this.tosterservic.warning("لايوجد اتصال", 'warning');
                        else {
                            return throwError(err);
                        }
                    }
                )
            )
           
        }
        else
            return next.handle(req.clone());
    }
}