import { Component } from '@angular/core';
import { Review } from './models/review';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  today: string = 'Today';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

  // newMovieReview: Review;
  reviews: Review[] = [
    new Review('Endgame', ['the best movie ever!'])
  ]
  //
  // addReview(newTitle: string, newReview: string) {
  //   this.newMovieReview =new Movie(newTitle, newReview);
  //   this.reviews.push(this.newMovieReview);
  // }
}
