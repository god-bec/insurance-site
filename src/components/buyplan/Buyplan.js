import React from 'react'
import './Buyplan.css'
import { useState} from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';





export const Buyplan = (props) => {
    const data = props.data
    //grabing input value so it can be used to serach array
    const [namesearch, setNamesearch] = useState("");
    //conditional rendering the serch items if input is clicked
    const [searchitem, setSearchitem] = useState(false);
    //conditional remove input if search item  is clicked
    // const [isclicked, setIsclicked] = useState(true)
    // const hospitalList = useRef(null);

    // const clicked = () => {
    //    setIsclicked(!isclicked)
  
    // }

    const handleChange = (e) => {
        setNamesearch(e.target.value);
        setSearchitem(!searchitem)
        

    }
    const handleClick = (e) => {
        setSearchitem(!searchitem)
      

    }


   
    return (
        <>
            <div className='Buyplan' id="buyplan">
                <h3>Pre existing condition Benefit</h3>
                <p >Pre-existing condition are Serious illness that have existed AT ANY TIME BEFORE the start of your insurance plan.
                    With this pre-existing condition coverage,treatment,test and druds for selected condition like Hypertention, Dibeties, Arthritis, and prptic ulcer are covered from the moment you buy the plan.
                    This is perfect for older parents, senior citizen or anyone battling with any of these conditions.You can visit the <Link to=''>Pre-existing condition section</Link> of the FAQs for more details
                    Clicke <Link to=''>here</Link> to view a comprehensive list of benefits for the pre-existing Condition Plan
                </p>
                <h2>Buy plan</h2>
            <form >
                           <label>Please select a hospital. Search by hospital name or location</label><br />
                                <input type='text' id="search" placeholder='search' value={namesearch} onChange={handleChange} onClick={handleClick}  />

                </form>
               {searchitem &&  <div className={'hospital-list-container' }>
                    {

                         data.filter((item) => {

                            if (namesearch === "") {
                                return item;

                            } else if (item.name.toLowerCase().includes(namesearch.toLowerCase()) || item.state.toLowerCase().includes(namesearch.toLowerCase())) {
                                return item;

                            }else{
                                return 'notfound'
                            }

                        }).map((el) => {
                            return (
                       
                               <ul className='hospital-list-ul' >
                             
                                   <Link className="plan-link" to={`/buyplan/${el.id}`}  onClick={handleClick}><li key={el.id}>{el.name}</li></Link>
                                   
                                </ul> 
                                

                            )
                           
                        })

                    }
                </div>}
            </div>



            <Outlet/>
        </>
    )
}
