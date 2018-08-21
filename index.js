function produceDrivingRange(range){


  return function(first, second){
    var NUMERIC_REGEXP = /[-]{0,1}[\d]*[\.]{0,1}[\d]+/g;

    let first_num = first.match( NUMERIC_REGEXP );
    let second_num = second.match( NUMERIC_REGEXP );
    let difference = Math.abs(first_num - second_num);
    if ( difference > range ){
      return `${difference - range} blocks out of range`
    }else{
      return `within range by ${range - difference}`
    }
 }



}


function produceTipCalculator(tipMultiplier){

  return function(fare){
    return tipMultiplier * fare;
  }


}
