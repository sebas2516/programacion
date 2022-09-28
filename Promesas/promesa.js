const promise = new Promise((resolve, reject) => {

    resolve("startcounting");
    })
    .then(value => {
    console.log(value);
    return "one";
    })
    .then(value => {
    console.log(value);
    return "two";
    })
    .then(value => {
    console.log(value);
    return "three";
    })
    .then(value => {
        console.log(value);
        return "four";
        })
    .catch(value => {
    console.log(value);
    })


    //promise con numeros

    const numeros = new Promise((resolve, reject) => {
    let x = 1;
    resolve (x);
       })

       setTimeout(function(){
        console.log('settimeout con función clásica')
        },1000)

        .then(x => {
        console.log(x);
        return ++x;
        })
        .then(x => {
        console.log(x);
        return ++x;
        })
        .then(x => {
        console.log(x);
        return ++x;
        })
        .then(x => {
        console.log(x);
        return ++x;
        })
        .then(x => {
        console.log(x);
        return ++x;
        })
        .catch(x => {
        console.log(x);
        })