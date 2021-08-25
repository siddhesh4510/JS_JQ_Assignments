const solveProblem = ( scentence ) => {
    let answer=[];
    let splittedArray=scentence.match( /[^\.!\?]+[\.!\?]+/g );
    splittedArray.forEach(
        (element, index) => {
            let spaceRemoved=element.replace(/(^\s*)|(\s*$)/gi,"");
            if( spaceRemoved.split(" ").length > 3 ) {
                let phoneNumber=spaceRemoved.match(/[\+]?\d{10}|\(\d{3}\)\s?-\d{6}/);
                if( phoneNumber ){
                    spaceRemoved=spaceRemoved.replace( phoneNumber[0].toString() , "XXXXXXXXXX");
                }
                answer.push( spaceRemoved );
            }
        }
    )
    return answer;
}


const printSolution=function ( scentence ){
    let answer = solveProblem( scentence );
    answer.forEach( (element , index ) => console.log( `${index+1}.  ${element}`));
}


let inputString="Thank you so much for contacting us. Dreamland guest relations. You're speaking with Ronaldo. May I have your name, please? Yes, sure. My name is robin soleimani. What is your phone number? It is 9876535362 as mentioned in the book Diary. Thank you so much for providing the info!"
printSolution( inputString )
