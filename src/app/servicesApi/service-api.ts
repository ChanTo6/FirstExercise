import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceApi {

  constructor() { }
  sendFormData(data: any, selectedPackage: string) {
    console.log('გამოგზავნილია ServiceApi-დან!', { 
      package: selectedPackage, 
      data 
    });
  }
}
