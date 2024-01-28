class Renting {
   constructor(title, genre, stock) {
    this.title = title;
    this.genre = genre;
    this.stock = stock;
   }

   //A class method that rents a movie
    rentMovie() {
      if(this.stock > 0) {
        this.stock--;
        console.log(`you have rented "${this.title}" Nwanne enjoy!`);
      } else {
        console.log(`Sorry this "${this.title}" don finish ,no vex inu!`);
      };
    }

    //Renting class method that returns a  movie.
     returnMovie() {
       this.stock++;
       console.log(`You have succesfully returned "${this.title}"`);
     }

     
}

  // A new class that inherits from renting class
  class  Rent {
    constructor() {
      this.movies = [];
    }

    //A rent class method that add new movies .
     newMovie(title, genre, stock) {
      const movie = new Renting(title, genre, stock);
      this.movies.push(movie);
     }

     //this class method allows you to rent a movie.
      rentFilm(title) {
        const movie = this.searchMovie(title);

        if(movie){
          movie.rentMovie();
        }else {
          console.log(`Movie: ${title}, not found sorry inugo!!`);
        }
      }

      //class method that returns a movie
       returnFilm(title) {
         const movie = this.searchMovie(title);

         if (movie) {
          movie.returnMovie();
          console.log(`returned succesfully. confirm `);
         } else {
            console.log(`Movie ${title} not found`);
         }
       }

       //Class method that search for available movies in the movie app.
        searchMovie(title) {
         return this.movies.find((item) => item.title === title);
        }

        //this class method displays the whole movies in the renting app
          listFilm() {
            console.log(`Available Movies:`);

            this.movies.forEach((value) => {
              console.log(`${value.title}, ${value.genre}, Stock : ${value.stock}`);
            });

          }
 }

   //Examples
     const hire = new Rent();

     //Add new movies to the system 
      hire.newMovie("Priest", "Horror", 7);
      hire.newMovie("Batman", "Action", 10);
      hire.newMovie("Naruto", "Anime", 20);
      hire.newMovie("Black", "Action", 20);
      hire.newMovie("one piece", "Anime", 20);
      hire.newMovie("Akame", "Anime", 20);
      hire.newMovie("Death Note", "Anime", 20);

      //rent and return the movies.
      hire.rentFilm("Black");
      hire.rentFilm("Naruto");
      hire.rentFilm("Priest");
      hire.rentFilm("one piece");
      hire.rentFilm("Batman");
      hire.rentFilm("Akame");
      hire.rentFilm("Death Note");

      //return a movie.
       hire.returnFilm("Akame");
       hire.returnFilm("Black");
       hire.returnFilm("Priest");

       //List of all available movies 
         hire.listFilm();


