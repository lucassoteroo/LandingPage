import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  public getNotification() {
    if( !("Notification" in window)) {
      console.log('Navegador não suporta notificações');
    } else if ( Notification.permission === "granted") {
        const notify = new Notification('Olá, bem vindo(a) de volta!');
    } else if ( Notification.permission !== "denied") {
        Notification.requestPermission( function(permission){
            if(permission === "granted"){
                const notify = new Notification('Olá, bem vindo(a)!');
            }
        })
    }
  }
}
