import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  appStatus = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('stable');
    }, 2000);
  });
  title: String = 'PIPES practice app';
  subtitle: String = 'I am practicing pipes in Angular';
  date = new Date(2021, 2, 4);

  sendData = () => {
    try {
      throw new Error('This is send Error');
    } catch (error) {
      console.log(error.message);
    }
  };
  getData = () => {
    throw new Error('This is get error');
  };
}
