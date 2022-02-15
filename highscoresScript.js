    console.log("ended");
   
    
    let sortedScore=allStorage();
    //console.log(sortedScore);
    
    
    sortedScore.forEach((element)=>{
      if(element.name.trim()!=="")
      document.getElementById("highscoreTable").innerHTML+=`<tr><td>${element.name} </td> <td>${element.score}</td> </tr>`
    });
   

  //function to store names and score
  
  function allStorage() {
  
      var values = [],
          keys = Object.keys(localStorage),
          i = keys.length;
      console.log(keys);
      while ( i-- ) {
          values.push({name:keys[i] ,score :localStorage.getItem(keys[i])});
      }
  
      //console.log(values);
    
    
      function compare( a, b ) {
        if ( a.score > b.score ){
          return -1;
        }
        if ( a.score < b.score ){
          return 1;
        }
        return 0;
      }
      
      values.sort( compare );
      return values;
  }



