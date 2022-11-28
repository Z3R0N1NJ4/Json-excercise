fetch("../data.json")
.then((res)=> {
    return res.json();
})
.then((data)=> {
    let Laptops = data.Laptops;
    console.table(Laptops);
})