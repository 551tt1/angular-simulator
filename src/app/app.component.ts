import { Component } from '@angular/core';
import '../enums/Color.ts';
import { Data } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  nameCompany = "РУТИМБЕТ";
  heroTitle = "Насладись прогулкой в горах с командой единомышленников";
  aboutHikeSubtitle = "о нашем походе";
  aboutHikeTitle = "Исследуйте все горные массивы мира вместе с нами";
  aboutHike = "Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, \"consectetur\"и занялся его поисками в классической латинской литературе."
  constructor() {
    this.saveLastVisitDate();
    this.countVisits();
  }
  
  saveLastVisitDate(): void {
    localStorage.setItem("visit", new Date().toISOString());
  }
  countVisits(): void {
    let count:number = 0;
    const counterVisits: string | null = localStorage.getItem("countOfVisits");
    if(counterVisits === null) {
      count = 1;
    }
    else {
      count = Number(counterVisits) + 1;
    }
    localStorage.setItem("countOfVisits", String(count));
  }
}

function isPrimaryColor(color: Colors): boolean {
  return color === Colors.BLUE || color === Colors.GREEN || color === Colors.RED;
}