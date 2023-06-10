import React from 'react'
import { useState } from 'react'
import './Business.css'

export const BusInput = () => {
 
 const [inputs, setInputs] = useState([])

 const [compname, setcompname] = useState('');
 const [address, setaddress] = useState('');
 const [mail, setmail] = useState('');
 const [username, setusername] = useState('');
 const [states, setstates] = useState('pick state');
 const [comment, setcomment] = useState('comments');
 const [phone, setphone] = useState();
 const [firsttime, setfirstime] = useState("pls select");

const companyNameChange = (e)=>{
  
  setcompname(e.target.value);

}
const addressChange = (e)=>{
  setaddress(e.target.value);

}
const mailChange = (e)=>{
  setmail(e.target.value);

}
const userChange = (e)=>{
  setusername(e.target.value);

}
const stateChange = (e)=>{
  setstates(e.target.value);

}
const commentChange = (e)=>{
  setcomment(e.target.value);

}
const phoneChange = (e)=>{
  setphone(e.target.value);

}



const firsttimeChange = (e)=>{
  setfirstime(e.target.value);
console.log(firsttime)
}

const handleSubmit =(event)=>{
  event.preventDefault();
    setInputs([{
      compname:compname,
      address :address,
      email : mail,
      username : username,
      state : states,
      comments:comment,
      phoneno: phone,
      new:firsttime
 }]);
  
const busHMOusers = [...inputs]
console.log(busHMOusers);


setcompname("");
setaddress("");
setmail("");
setusername('');
setcomment("");
setphone('');
setfirstime("");
setstates();
setfirstime("");

}



  return (
    <div className='more'>
      
   <form action="" method="" className='FormBus' onSubmit={handleSubmit}>
   <h2>Thank you for choosing us. Kindly fill the form below to get started.</h2>

   <div className='busForm'>
  <div className='partA'>
  <label htmlFor="company-name" >Company Name:</label>
  <input type="text" id="company-name" name="company-name" onChange={companyNameChange} value={compname} required/>
  <label htmlFor="address">Company Address:</label>
  <input type="text" id="address" name="address"   onChange={addressChange} value={address}  required />
  <label htmlFor="number-of-employees">Number of Employees:</label>
  <input type="number" id="number-of-employees" name="number-of-employees" required/>
  <label htmlFor="first time?">Is this your company’s first time getting health insurance?</label>
  <select id="first time?" name="first time?" onChange={firsttimeChange} required>
    <option value="">--Please select--</option>
    <option value="yes">Yes</option>
    <option value="no">No</option>
  </select>
  <label htmlFor="state">Select your state:</label>
<select id="state" name="state" onChange={stateChange} >
  <option value="Abia">Abia</option>
  <option value="Adamawa">Adamawa</option>
  <option value="Akwa Ibom">Akwa Ibom</option>
  <option value="Anambra">Anambra</option>
  <option value="Bauchi">Bauchi</option>
  <option value="Bayelsa">Bayelsa</option>
  <option value="Benue">Benue</option>
  <option value="Borno">Borno</option>
  <option value="Cross River">Cross River</option>
  <option value="Delta">Delta</option>
  <option value="Ebonyi">Ebonyi</option>
  <option value="Edo">Edo</option>
  <option value="Ekiti">Ekiti</option>
  <option value="Enugu">Enugu</option>
  <option value="FCT">Federal Capital Territory</option>
  <option value="Gombe">Gombe</option>
  <option value="Imo">Imo</option>
  <option value="Jigawa">Jigawa</option>
  <option value="Kaduna">Kaduna</option>
  <option value="Kano">Kano</option>
  <option value="Katsina">Katsina</option>
  <option value="Kebbi">Kebbi</option>
  <option value="Kogi">Kogi</option>
  <option value="Kwara">Kwara</option>
  <option value="Lagos">Lagos</option>
  <option value="Nasarawa">Nasarawa</option>
  <option value="Niger">Niger</option>
  <option value="Ogun">Ogun</option>
  <option value="Ondo">Ondo</option>
  <option value="Osun">Osun</option>
  <option value="Oyo">Oyo</option>
  <option value="Plateau">Plateau</option>
  <option value="Rivers">Rivers</option>
  <option value="Sokoto">Sokoto</option>
  <option value="Taraba">Taraba</option>
  <option value="Yobe">Yobe</option>
  <option value="Zamfara">Zamfara</option>
</select>
  </div>

  <div className='partA'>
  <label htmlFor="contact-person">Contact Person:</label>
  <input type="text" id="contact-person" name="contact-person" onChange={userChange} value={username} required/>

  <label htmlFor="email">Email:</label>
  <input type="email" id="email" name="email" onChange={mailChange} value={mail} required/>


  <label htmlFor="phone" >Phone:</label>
  <input type="tel" id="phone" name="phone" value={phone} onChange={phoneChange} required/>


  <label htmlFor="additional-comments">Additional Comments:</label>
  <textarea id="additional-comments" name="additional-comments" value={comment} onChange={commentChange}></textarea>
  
  <button id="bus-submit" >Submit</button>
  </div>
  </div>
</form>





        
    </div>
  )
}
