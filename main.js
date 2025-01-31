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
        let randomIndex = Math.floor(Math.random() * 15);
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

        return { 
          specimen1: this.specimenNum,
          specimen2: otherDNA.specimenNum,
          DNApercentage: percentage
        };


      },



      //task 6
      //add 60% c or G bases

      willLikelySurvive() { 
        let survivalObject = this.dna.filter( (item)=> { 
          return item === 'C' || item === 'G';
        });
        //console.log(survivalObject);

        let survivalPercentage = Math.floor((survivalObject.length / this.dna.length ) * 100) ;
        
        //console.log(survivalPercentage);

        if (survivalPercentage >= 60 ) { 
          return true;
        } else if (survivalPercentage < 60) { 
          return false; 
        }

      },

      //task 9.1
      //create complementary DNA strand
      complementStrand() { 

        let changeaAray = this.dna ; 

        let complementaryDNA = changeaAray.map( (item)=> { 

          switch (item) { 
            case 'A' : 
              return 'T';
              break;

            case 'T' : 
              return  'A';
              break;
            
            case 'C':
              return 'G';
              break;
            
            case 'G':
              return  'C';
              break;

            default: 
              return item;

          }

        });

        return complementaryDNA ;

      }


    }

  }





function generatesample() { 

  let instanceLibrary = [];

  let filteredInstance = [];

  for (let i = 0 ; i <= 500 ; i++){ 

    let instanceNum = i ;
    let instanceDNA = mockUpStrand();
    instanceLibrary.push (pAequorFactory(instanceNum,instanceDNA));
  }

  //console.log(instanceLibrary);


  for (let j = 0 ; j < instanceLibrary.length ; j++){

    if (filteredInstance.length >= 30){ 
      break;
    }

    if (instanceLibrary[j].willLikelySurvive()) { 
      filteredInstance.push(instanceLibrary[j]);
    }

  }

  return filteredInstance;


}



//task 9.2
//find two most related instances 

function findRelatedInstance (arrays) { 

  let List = [];

  for(let i = 0 ; i < arrays.length ; i++){ 

    for (let j = i + 1 ; j < arrays.length ; j++) { 

     List.push(arrays[i].compareDNA(arrays[j]));

    }
  }


  //sort the List and find the solution 
    List.sort((a,b) => b.DNApercentage - a.DNApercentage);  

    return List[0];



}
















//Testing

//let sample01 = mockUpStrand();

//console.log(sample01);

//let testing01 = pAequorFactory(1,sample01);

//console.log(testing01.complementStrand());


//console.log(testing01.willLikelySurvive());

//console.log(testing01.mutate())


//let sample02 = mockUpStrand();


//console.log(sample02);
//let testing02 = pAequorFactory(2,sample02);

//testing01.compareDNA(testing02);



//console.log(JSON.stringify(generatesample()));


let newInstanceArray = generatesample() ;






//console.log(JSON.stringify(newInstanceArray));

//console.log(newInstanceArray[0].compareDNA(newInstanceArray[1]));

//let percentageList = (findRelatedInstance(newInstanceArray));

let result = findRelatedInstance(newInstanceArray);


console.log(result);



