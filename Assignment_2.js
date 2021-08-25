qTeams = {aaiec: 400,
    aaiwc: 60,
    qai: 200,
    poc: 100,
    gtm: 50,
    hr: 10
    };



const sorteObjectKeys=( obj ) => {
    
    let keysFetched=Object.keys( obj );
    keysFetched.sort(
        (a,b) => qTeams[b]-qTeams[a]            /* Passing comparator which take value of keys from qTeams and return positive(true) if first is less*/ 
    )
    return keysFetched;

}

let sortedList=sorteObjectKeys( qTeams );
console.log(sortedList);

