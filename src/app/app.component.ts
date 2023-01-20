import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Web Dev Quiz 2022';

  ngOnInit() {
    for (let i = 1; i <= 100; i++) {
      if (i % 3 == 0 && i % 5 == 0) {
        console.log('amazon');
      } else if (i % 5 == 0) {
        console.log('facebook');
      } else if (i % 3 == 0) {
        console.log('google');
      } else {
        console.log(i);
      }
    }
  }
}
