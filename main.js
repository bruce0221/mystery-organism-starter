// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};


//Array for 30 instances of pAequor 

let surviveInstances = [] ; 








//task 3
function pAequorFactory(num, dnaBasesArray){

  return { 

    
    //Object property
    specimenNum : num,
    dna : dnaBasesArray,



    //Object method

    //Task 4
    //Change DNA first base into randomly selected base
      mutate() { 

        let mutateDNA = this.dna;
        let randomIndex = Math.floor(Math.random() * 16);
        let selectedBase = mutateDNA[randomIndex];
        let DnaBases = ['A', 'T', 'C', 'G'];
        

        console.log(randomIndex);

        let newDnaBases = DnaBases.filter((item => { 
          return item !== selectedBase;
        }))
        mutateDNA[randomIndex] = newDnaBases[Math.floor(Math.random() * 3)];
        return mutateDNA;

      },


      //task 5
      //Compare other DNA with pAequor DNA

      compareDNA(otherDNA) { 
        let objectInCommon = 0 ;

        for (let i = 0 ; i < this.dna.length; i++ ) { 

          if (this.dna[i] === otherDNA.dna[i]) { 
            objectInCommon += 1;
          }
        }

        let percentage = Math.floor((objectInCommon / this.dna.length) * 100) ;
        console.log( `specimen #${this.specimenNum} and specimen #${otherDNA.specimenNum} have ${percentage}% DNA in common.`);

      },



      //task 6
      //add 60% c or G bases

      willLikelySurvive() { 
        let survivalObject = this.dna.filter( (item)=> { 
          return item === 'C' || item === 'G';
        });
        console.log(survivalObject);

        let survivalPercentage = Math.floor((survivalObject.length / this.dna.length ) * 100) ;
        
        console.log(survivalPercentage);

        if (survivalPercentage >= 60 ) { 
          return true;
        } else if (survivalPercentage < 60) { 
          return false; 
        }

      },







    }

  }






function createInstance () { 

  let surviveInstances = [] ; 

  let numberOfInstance = surviveInstances.length;

  let instance = [];

  console.log(surviveInstances);


  for (let i = 1 ; i <= 100 ; i++) { 

    instance[i] = pAequorFactory( i , mockUpStrand);

    if (numberOfInstance === 30){ 
      break ;
    }


    if (instance[i].willLikelySurvive() === true) { 
      surviveInstances.push(instance[i]);
    }

  }


}

















//Testing

//let sample01 = mockUpStrand();

//console.log(sample01);

//let testing01 = pAequorFactory(1,sample01);


//console.log(testing01.willLikelySurvive());

//console.log(testing01.mutate())

/*
let sample02 = mockUpStrand();


console.log(sample02);
let testing02 = pAequorFactory(2,sample02);

testing01.compareDNA(testing02);
*/


createInstance();

console.log(JSON.stringify(surviveInstances));
