function createEmployeeRecord(arr){
    let arroObj = {
        firstName:arr[0],
        familyName:arr[1],
        title: arr[2],
        payPerHour:arr[3],
        timeInEvents:[],
        timeOutEvents:[],
    }
 return arroObj
 }
 // console.log(createEmployeeRecord(employeesArr[0]))
  
 function createEmployeeRecords(employeesArr){
    let newArrObj= [];
    employeesArr.forEach(employee=>{
        let newObj = createEmployeeRecord(employee);
        newArrObj.push(newObj)
    })
    return newArrObj
 }
 // console.log(createEmployeeRecords(employeesArr))
  
 function createTimeInEvent(date){
    let dateSplit = date.split(' ');
    let addTimeIn ={
        type:"TimeIn",
        hour:parseInt(dateSplit[1], 10),
        date:dateSplit[0],
    }
 this.timeInEvents.push(addTimeIn)
 return this
  
 }
 // console.log(createTimeInEvent.call(newRec[0], "2022-08-12 800"))
  
 function createTimeOutEvent(date){
    let dateSplit = date.split(' ')
    let addTimeOut ={
        type:"TimeOut",
        hour:parseInt(dateSplit[1], 10),
        date:dateSplit[0],
    }
 this.timeOutEvents.push(addTimeOut);
 return this;
 }
 // console.log(createTimeOutEvent.call(newRec[0], "2021-07-12 1800"))
  
  
 function hoursWorkedOnDate(selectDate){
 let timeInEventsArr = this.timeInEvents;
 let timeOutEventsArr = this.timeOutEvents;
 let dayTimeIn;
 let dayTimeOut;
 timeInEventsArr.map(item =>{
 if (item.date === selectDate){
        dayTimeIn= item.hour;
    }
 })
 timeOutEventsArr.map(item =>{
 if (item.date === selectDate){
        dayTimeOut= item.hour;
    }
 })
 let hoursWorked = Math.ceil((dayTimeOut-dayTimeIn)/100)
 return hoursWorked
 }
 // console.log(hoursWorkedOnDate.apply(newRec[0], ["2022-10-12"]))
 function wagesEarnedOnDate(selectDate){
    const hours = hoursWorkedOnDate.bind(this);
   let hoursWork = hours(selectDate);
    let wages = hoursWork*this.payPerHour;
    return wages;
 }
 // console.log(wagesEarnedOnDate.call(newRec[0], '2022-12-12'))
  
 // function allWagesFor(){
 // let timeInEventsArr = this.timeInEvents;
 // let timeOutEventsArr = this.timeOutEvents
 // let total = 0;
 // timeInEventsArr.map(item=>{
 //     timeOutEventsArr.map(item2=>{
 //                  if(item.date === item2.date){
  
 //                 let wages = Math.floor(((item2.hour-item.hour)/100)*this.payPerHour)
 //                 total+=wages
 //             }
 //     })
 // })
 // return total
 // }
 // // console.log(allWagesFor.call(newRec[0]))
 function findEmployeeByFirstName(srcArray, firstName){
 let matchFind= srcArray.filter(item =>{
    if(item.firstName === firstName){
    return item
       
  
    }
 })
 return matchFind
 }
 // console.log(findEmployeeByFirstName(newRec, "Clare"))
  
 function calculatePayroll(arr){
 let eachWage = []
 arr.map(obj=>{
    let x = allWagesFor.call(obj);
    eachWage.push(x);
 })
 let totalWages = eachWage.reduce((accum, item)=>{   
 return accum + item;
 })
 return totalWages
 }
 // console.log(calculatePayroll(newRec))
 
 