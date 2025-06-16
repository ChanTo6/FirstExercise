import { Component } from '@angular/core';
import { ServiceApi } from '../servicesApi/service-api';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  constructor(private serviceApi: ServiceApi){};
  
  isPopupOpen = false;
  selectedPackage = '';
  formData = { name: '', surname: '', email: '', phone: '' };

  openPopup(packageName: string) {
    this.selectedPackage = packageName;
    this.isPopupOpen = true;
  }
  
  closePopup() {
    this.isPopupOpen = false;
    this.formData = { name: '', surname: '', email: '', phone: '' };
  }
  
 submitForm() {
    // გამოიძახე სერვისი
    this.serviceApi.sendFormData(this.formData, this.selectedPackage);
  
    this.closePopup();
  }
}
