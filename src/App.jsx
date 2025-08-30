import './App.css'; 
import React ,{ useEffect, useState} from 'react';
import { element } from 'prop-types';
import {Studentdata} from './Studentdata.js';
import { clear } from '@testing-library/user-event/dist/clear.js';

function App() {


const [data,setData]=useState([]);
const[id,setId]= useState('0')
const[firstName,setFirstName]= useState('')
const[lastName,setLastName]= useState('')
const[fatherName,setFatherName]= useState('')
const[phoneNo,setPhoneNo]= useState('')
const[age,setAge]= useState('0')
const[isUpdate,setIsUpdate]= useState(false)

useEffect(()=>{
setData(Studentdata)
},[]);

const handleEdit = (id) => {
  const dt = data.filter(item => item.id === id);
  if(dt !== undefined)
  {
    setIsUpdate(true)
    setId(dt[0].id);
    setFirstName(dt[0].firstName);
    setLastName(dt[0].lastName);
    setFatherName(dt[0].fatherName);
    setPhoneNo(dt[0].phoneNo);
    setAge(dt[0].age);
    
  }
  alert(id);
}
 
const handleDelete = (id) => {
  if(id > 0)
  {
    if(window.confirm("Are You Sure to Delete This Item?"))
    {
    const dt = data.filter(item => item.id !== id);
    setData(dt);
  }
}}

const handleSave = (e) => {
  let error = '';
  if(firstName === '')
    error+= 'First name is required,';
  if(lastName === '')
    error+= 'Last name is required,';
  if(fatherName === '')
    error+= 'Father name is required,';
  if(phoneNo <= 0)
    error+= 'Phone no is required,';
  if(age <= 0)
    error+= 'Age is required .';
    if (error === '')
     {
  e.preventDefault();
  const dt = [...data];
  const newObject = {
    id : Studentdata.length + 1,
    firstName :firstName,
    lastName : lastName,
    fatherName :fatherName,
    phoneNo : phoneNo,
   age : age
  }

  dt.push(newObject);
  setData(dt);
     }
else{
  alert(error)
}  
}

const handleUpdate = () => {
  const index = data.map((item)=>{
    return item.id
  }).indexOf(id);
  const dt =[...data];
  dt[index].firstName =firstName;
  dt[index].lastName =lastName;
  dt[index].fatherName =fatherName;
  dt[index].phoneNo =phoneNo;
  dt[index].age =age;

  setData(dt);
handleClear();
  
}
const handleClear = () => {
   setId(0);
    setFirstName('');
    setLastName('');
    setFatherName('');
    setPhoneNo('');
    setAge('');
    setIsUpdate(false)
    
  
}


  
return(
<div className="App">
<div style={{display:'flex',justifyContent:'center',marginTop:'10px' , marginBottom:'10px'}}>
<div>
  <label>First Name :
    <input type='text' placeholder='Enter First Name'onChange={(e) =>setFirstName(e.target.value)} value={firstName}/>
  </label>
</div>
<div>
  <label>Last Name :
    <input type='text' placeholder='Enter Last Name'onChange={(e) =>setLastName(e.target.value)}value={lastName}/>
  </label>
</div>
<div>
  <label>Father Name :
    <input type='text' placeholder='Enter Father Name'onChange={(e) =>setFatherName(e.target.value)}value={fatherName}/>
  </label>
</div>
<div>
  <label>Phone No :
    <input type='text' placeholder='Enter Phone No'onChange={(e) =>setPhoneNo(e.target.value)}value={phoneNo}/>
  </label>
</div>
<div>
  <label>Age :
    <input type='text' placeholder='Enter Age'onChange={(e) =>setAge(e.target.value)}value={age}/>
  </label>
</div>
<div>
  {
 !isUpdate ?
 <button className='btn btn-primary'onClick={(e)=> handleSave(e)}>Save</button>
 :
   <button className='btn btn-primary'onClick={()=> handleUpdate()}>Update</button>
  }
<button className='btn btn-danger'onClick={()=> handleClear()}>Clear</button>

</div>
</div>









<table className='table table-hover'>
  <thead>
    <tr>
      <th>S.No</th>
      <th>Id</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Father Name</th>
      <th>Phone No</th>
      <th>Age</th>
    </tr>
  </thead>
  <tbody>
    {
      data.map((item,index) =>{
        return(
          <tr key={index}>
            <td>{index+1}</td>
            <td>{item.id}</td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.fatherName}</td>
            <td>{item.phoneNo}</td>
            <td>{item.age}</td>
            <td>
<button className='btn btn-primary'onClick={(e)=> handleEdit(item.id)}>Edit</button>&nbsp;
<button className='btn btn-danger'onClick={(e)=> handleDelete(item.id)}>Delete</button>
            </td>
          </tr>
        )
      })
    }
  </tbody>
</table>


</div>      


     ) ;
} ;





export default App ;





















































