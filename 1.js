const car = {
    make : "TATA",
    model : "Punch",
    year:2020
};
function display(car){
    for(const property in car){
        console.log(`${property} : ${car[property]}`);
    }
}
display(car);