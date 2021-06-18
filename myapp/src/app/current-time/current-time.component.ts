import { Component, OnInit } from '@angular/core';
import { CurrentTime, CurrentTimeService } from './current-time.service'

@Component({
  selector: 'app-current-time',
  templateUrl: './current-time.component.html',
  providers: [ CurrentTimeService ],
  styleUrls: ['./current-time.component.scss']
})
export class CurrentTimeComponent implements OnInit {
  
  error: any;
  currentTime: CurrentTime | undefined;

  constructor(private currentTimeService: CurrentTimeService
  ) { }

  ngOnInit(): void {
    this.showTime()
  }

  showTime() {
    this.currentTimeService.getTime()
      .subscribe(
        data => {
          this.currentTime = { ...data }
        },
        error => this.error = error
      );
  }
}
