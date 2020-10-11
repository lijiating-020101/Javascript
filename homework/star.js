let str ="";
for(let i=1; i<=4; i++){    
let blank = " ";    
let stars = " ";   
for(let m = 1; m <= 4-i; m++){
blank = blank + " ";
 }
for(let n=1; n<=i;n++){
 stars = stars + "*" + " ";
 }    
 str = str +blank + stars +"\n";
 }
 for(let i=4-1; i>0; i--){    
 let blank = " ";    
 let stars = " ";    
 for(let m=1; m<=4-i; m++){        
 blank += " ";    
 }    
 for(let n=1; n<=i; n++){        
 stars += "*" + " ";    
 }     
 str += blank + stars + "\n";}console.log(str);