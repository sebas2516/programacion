$.on('button', 'click', function onClick() {
    setTimeout(function timer() {
        console.log('You clicked the button!');    
    }, 2000);
});

const promise = new Promise((resolve, reject)=>{
    resolve('Start counting');
})
.then(value =>{
    console.log(value);
    return "one";
})
.then(value =>{
    console.log(value);
    return "two";
})
.then(value =>{
    console.log(value);
    return "three";
})
.then(value =>{
    console.log(value);
    return "four";
})