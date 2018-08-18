import { Component } from '@angular/core';
import { AppService } from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent {

  textToReverse: string;
  reversedText: string;

  constructor(private appService: AppService) {

  }

  reverseIt() {
    if (this.textToReverse !== "") {
      this.appService.getReverse(this.textToReverse).subscribe((res) => {
        this.reversedText = res;
      })
    }
  }
}
