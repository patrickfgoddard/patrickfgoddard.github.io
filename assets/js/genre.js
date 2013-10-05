(function($) {
// 4 or 5 descriptors chosen from this
       var descriptorsArray = new Array("transgender", "afro", "down-tempo", "gamewave", "gamelan", "death", "black", "pagan", "gothic", "alternative", "funk", "progressive", "drone", "crust", "free-form", "industrial", "nu", "sludge", "garage", "goa", "grime", "horror", "indie", "irish", "jam", "fusion", "Jawaiian", "jig", "jug", "k-pop", "kubuki", "kiwi", "kinky", "Kwaito", "latin", "lo-fi", "light", "lounge", "Louisiana", "memphis", "detroit", "west coast", "east coast", "down tempo", "Luk grunge", "mambo", "mandarin", "marimba", "math", "medieval", "melodic", "pop-punk", "noise", "Merengue", "mexican", "post", "miami", "Minstrel", "minimalist", "modern", "motown", "nardcore", "nashville", "neo", "new age", "no age", "house", "romantic", "old time", "oldies", "obscuro", "avante garde", "operatic", "organic", "outlaw", "parody", "peace", "piano", "poco-poco", "porno", "power", "Psychedelic", "psych", "raga", "ragtime", "Reggae", "retro", "roots", "sad", "slow", "uptempo", "sacred", "saya", "country", "western", "shock", "scum", "smooth", "yacht rock", "slack-key", "soft", "southern", "spiritual", "space", "stoner", "desert", "surf", "swamp", "symphonic", "synth", "technoid", "thrash", "texas", "teen", "tibetan", "traditional", "trip-hop", "twee", "two-tone", "urban", "underground", "viking", "world", "hard", "street");
       // one top level chosen and put at end
       var toplevelArray = new Array("rock", "metal", "folk", "blues", "jazz", "pop", "hip hop", "core", "psychobilly", "techno", "polka", "trance", "funk", "rock en espanol", "rumba", "gospel", "salsa", "samba", "screamo", "country", "shoegaze", "ska", "speedcore", "soul", "tango", "tumba", "waltz", "zydeco");
       
      var newGenre = function() {
        var genre = '';
        // choose 4 random descriptors
        var descriptor =genreRand(4,descriptorsArray);
       
         // choose 1 random top level
         var toplevel =genreRand(1,toplevelArray);
         genre = descriptor + toplevel;
         return genre;
       }
       
       // Give function number of random items
       // and name of array to choose from
       // to do: why are undefines occurring?
        function genreRand(num,arrayName) {

          var random = '';
          var particle = '';
          var index = 0;
          // Capitalize first letter.
          // Taken from:
          // http://stackoverflow.com/questions/1026069/capitalize-the-first-letter-of-string-in-javascript
          String.prototype.capitalize = function() {
            return this.charAt(0).toUpperCase() + this.slice(1);
          }
          for ( var i = 0; i < num; i++ ) {
            index = Math.round(Math.random()*arrayName.length);
            particle = arrayName[index] + ' ';
            // remove that element so it can't be chosen again
            arrayName.splice(index,1)           
            random += particle.capitalize();
          }          
          return random;
        }
        
        // On page load, populate the give with generated genre.
        $('#genre').text(newGenre);
        // set action when "Refresh" button is clicked.
        $('#generate-genre').bind('click', function() {
          $('#genre').text(newGenre);
        });

})(jQuery);