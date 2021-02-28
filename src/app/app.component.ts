import { Component } from '@angular/core';
import timeline from 'src/data.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'timeline';
  public sortedtimeline = timeline.sort((a, b) => (a.data > b.data ? 1 : -1));
  removeDuplicates(timeline) {
    var uniq = {};
    var arrFiltered = timeline.filter(
      (obj) => !uniq[obj.data] && (uniq[obj.data] = true)
    );
    return arrFiltered;
  }
  ngOnInit(): void {
    this.timelineObject2 = this.removeDuplicates(this.timelineObject);
  }
  public timelineObject2 = [];
  public timelineObject: {
    data: number;
    title: string;
    description: string;
    icon: string;
  }[] = timeline;
}
