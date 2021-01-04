function list(names){
    var output='';
    for(var i = 0 ; i <names.length;i++){
      if(names.length == 1)
       output = names[0].name.toString();
      else
      {
          if(i != names.length-1){
            output +=names[i].name.toString() + ',';
          }else{
            output = output.slice(0,output.length-1);
            console.log(output);
            output += ' & '+names[i].name.toString();
            console.log(output);
            
          }
      }
    }
    return output;
  }

  list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'},{name: 'Homer'},{name: 'Marge'} ]);