function normalizeString(string){
    
    let resultString = string.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    
    // les voyelles sont remplacées par une ligature
    resultString = string.replace(/œ/g, "oe").replace(/æ/g, "ae").replace(/[']/g, " ")
  
    return resultString;
}