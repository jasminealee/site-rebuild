import { Component } from '@angular/core';

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

  newMovieReview: Review;
  reviews: Review[] = [
    new Review('Endgame',)
  ];
  addReview(newTitle: string, newReview: string) {
    const newReviewArray = newReview.split(', ');
    this.newMovieReview =new Movie(newTitle, newReview);
    this.reviews.push(this.newMovieReview);
  }
}
