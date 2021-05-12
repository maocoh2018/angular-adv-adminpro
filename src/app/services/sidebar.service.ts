import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu:any=[
    {
      titulo:'Dashboard',
      icono:'mdi mdi-gauge',
      submenu:[
        {
        titulo:'Main',
        url:'/'
        },
        {
          titulo:'Grafica',
          url:'grafica1'
        },
        {
          titulo:'rxjs',
          url:'rxjs'
        }, 
        {
          titulo:'Promesas',
          url:'promesas'
        },   
        {
        titulo:'ProgressBard',
        url:'progress'
        }          
        ]
    }

  ]
  constructor() { }
}
