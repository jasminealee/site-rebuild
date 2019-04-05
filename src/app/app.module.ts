import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export class AppData {
  constructor(
    public name: String
    <input type="text" class="form-control" id="name"
    required

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
  )
}
