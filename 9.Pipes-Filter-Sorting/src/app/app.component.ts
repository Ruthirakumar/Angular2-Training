import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
 startDate = new Date();
 courses =[{technology : 'Java',fees :'700', mode:"Online",startDate:this.startDate },
 {technology :'Angular', fees:'500', mode:'ClassRoom', startDate:this.startDate}]
}
