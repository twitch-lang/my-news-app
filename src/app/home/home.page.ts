import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NewsService } from '../services/news.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  constructor(private newsService: NewsService) { }

}

newsData: any;

getNewsData() {
  this.newsService.getNews().subscribe(data => {
    this.newsData = data;
  });
}
ionViewWillEnter() {
  this.getNewsData();
}

