import { Component } from '@angular/core';
import { Review } from './models/review';
import { FormsModule } from '@angular/forms';
 @NgModule([
   imports: [
     FormsModule
   ],
 ])

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
    new Review('Endgame', ['the best movie ever!'])
  ];
  addReview(newTitle: string, newThoughts: string) {
    const newThoughtsArray = newThoughts.split(', ')
    this.newMovieReview =new Review(newTitle, newThoughtsArray);
    this.reviews.push(this.newMovieReview);
  }

  editReview() {
    alert("Edit");
  }
}
