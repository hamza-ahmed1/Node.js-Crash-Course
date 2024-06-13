const csvtojson=require('csvtojson')
const promise_file_obj=csvtojson().fromFile('data.csv');
promise_file_obj.then((data)=>{
    console.log(data)
})