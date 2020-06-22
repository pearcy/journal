
export function JournalEntry(title, body) {
  this.title = title;
  this.body = body
}

 Journal.prototype.journalTitle=function(title){
//for (let i=0; i<title.length; i++) 
  return title.length;
  console.log(title.length);
}


Journal.prototype.journalBody=function(body) { 

let numberVowles = body.match(/[aeiou]/gi);
}





