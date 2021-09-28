

    const data =[{firstName:"Tirth", lastName:"shah", age:23}, 
    {firstName:"Abhishek", lastName:"pathak", age:25}, 
    {firstName:"Riya", lastName:"patel", age:24}, 
    {firstName:"Bhala", lastName:"batuk", age:18},
    {firstName:"Khalnayak", lastName:"Kalia", age:24}];

    const filteredData = data.filter((user) =>{
        return user.age >=24;
    })

    console.log(filteredData);

   