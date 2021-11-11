// 1A
const mulan = {
    title: `Mulan`,
    main: `Fa Mulan`,
    // 1B
    quote: () => `Dishonor! Dishonor on your whole family!`,
    // 1C
    storyline: function(){
      return `The movie ${this.title} is about ${this.main}`;
    }
  };
  
  // 2A
  const tangled = {
    title: `Tangled`,
    main: `Rapunzel`,
    // 2B
    quote: function(){
      return `I can't believe I did this! I can't believe I did this! I have to go home! I am never going back! I'm a horrible daughter! BEST DAY EVER!`;
    },
    // 2C
    storyline: function() {
      return `The movie ${this.title} is about ${this.main}`;
    }
  };
  
  // 3A
  function DisneyMovie(t, m){
    this.title = t;
    this.main = m;
  }
  
  // 3B
  DisneyMovie.prototype.storyline = function(){
    return `The movie ${this.title} is about ${this.main}`;
  }
  
  // 3C
  const mulan1 = new DisneyMovie(`Mulan`, `Fa Mulan`);
  console.log(mulan1); 
  
  // 3D
  const tangled1 = new DisneyMovie(`Tangled`, `Rapunzel`);
  console.log(tangled1); 
  
  // 4A
  class DM {
    constructor(t, m){
      this.title = t;
      this.main = m;
    }
    // 4B
    storyline (){
      return `The movie ${this.title} is about ${this.main}`;
    }
    // 4E
    static loveDisneyMovies(){
      return `I Love Disney Movies!`;
    }
  }
  
  // 4C
  const mulan2 = new DM(`Mulan`, `Fa Mulan`);
  console.log(mulan2); 
  console.log(mulan2.storyline());
  
  // 4D
  const tangled2 = new DM(`Tangled`, `Rapunzel`);
  console.log(tangled2); 
  console.log(tangled2.storyline());
  
  // 4E
  console.log(DM.loveDisneyMovies());
  
  // 5A
  class DMCast extends DM {
    // 5B
    constructor(t, m, c){
      // 5C
      super(t, m);
      this.cast = c;
    }
  }
  
  // 5D
  const mulan3 = new DMCast(
    `Mulan`,
    `Fa Mulan`,
    {
      mulan: `Ming-Na Wen`,
      mushu: `Eddie Murphy`,
      shang: `BD Wong`,
      theEmperor: `Pat Morita`
    }
  );
  console.log(mulan3);

  console.log(mulan3.storyline());

  console.log(DMCast.loveDisneyMovies()); 
  
  // 5E
  const rapunzel3 = new DMCast(
    `Tangled`,
    `Rapunzel`,
    {
      rapunzel: `Mandy Moore`,
      flynnRider: `Zachary Levi`,
      motherGothel: `Donna Murphy`
    }
  );
  console.log(rapunzel3);
  
  console.log(rapunzel3.storyline());