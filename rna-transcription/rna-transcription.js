//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (rna) => {
  let transcription = "";
  if(rna.length > 0) {
    for (let index = 0; index < rna.length; index++) {
      const letter = rna[index];
      switch (letter){
        case "G":
          transcription = transcription + 'C';
          break;
        case "C":
          transcription = transcription + 'G';
          break;
        case "T":
          transcription = transcription + 'A';
          break;
        case "A":
          transcription = transcription + 'U';  
          break;
      }
    }
  }
  return transcription;
};

