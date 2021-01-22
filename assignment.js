// https://github.com/Ashraful-Hasan10/Assignment-JS

// 1st problem( Kilometer to meter )

function kilometerToMeter (num){
    if(num<0){
        console.log('Length cannot be any negative value');
    }
    else{
        var kilometer= num*1000;
        console.log(kilometer);
    }
    return kilometer;
}

// Example to check the code:
kilometerToMeter(6);



// 2nd problem (Budget Calculator)

function budgetCalculator(num1, num2, num3){
    if(num1 <0 || num2 <0 || num3 <0 ){
        console.log('Enter positive values');
  }
  else{
       var watch= num1*50;
       var mobile= num2*100;
       var laptop= num3*500;
       numtotal= watch + mobile+ laptop;
       console.log(numtotal);
       return numtotal;
       }
        
  }
   
  // Example to check the code: 
 budgetCalculator(9, 0, 4);
   
        


// 3rd Problem (Count The Hotel Cost)

function hotelCost(Days){
    if(Days<0){
      console.log('Days should be positive');
    }
    
    else if(Days<=10){
        rent= Days*100;
        console.log(rent);
    }
    else if(Days<=20){
        rent=1000+(Days-10)*80;
        console.log(rent);
    }
    else{
        rent=1800+(Days-20)*50;
        console.log(rent);
    }
}

// Example to check the code:
hotelCost(5);
        



// 4rth Problem (Largest Friend Name)
function  megaFriend(name){  
 var large1 = name[0].length;
 var large2 = name[0];
 var i;
 
 for(i=0;i<name.length;i++){
     var length1 = name[i].length;
      
        if(large1<length1){
          large1=length1;
          large2=name[i];
         }
 }
    console.log(large2);
    return large2;
 }

 // Example to check the code:
 megaFriend(['Jhankar', 'Mahbub', 'Programming', 'Hero']);
 
 






  
