import React from 'react'
// import { FaAngleLeft } from "react-icons/fa";
// import { FaAngleRight } from "react-icons/fa";
import './About.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])
const comments = [
    {
        id: 1,
        content: "sureHealth in this hospital is known to be one of the best hmo that is well organised and provides prompt services. They are good with case follow up and pay their bills promptly. payment can easily be tracked from the portal which translates to ease in reconciliation.",
        name: "Chukwu Elizabeth (head of WHO)"
    },
    {
        id: 2,
        content: "Our relationship with sureHealth has so far been productive and we know them to be proactive in making sure our staff readily access healthcare services.",
        name: "Chukwu Elizabeth (head of happines bank)"
    },
    {
        id: 3,
        content: "sureHealth has really lived up to its name. It's an absolutely reliable organization which has an incredible health plan with contact persons always on hand 24/7 to handle requests and emergencies.",
        name: "Chukwu Elizabeth (head of happines bank)"
    },
    {
        id: 4,
        content: "sureHealth has really lived up to its name. It's an absolutely reliable organization which has an incredible health plan with contact persons always on hand 24/7 to handle requests and emergencies.sureHealth has really lived up to its name. It's an absolutely reliable organization which has an incredible health plan with contact persons always on hand 24/7 to handle requests and emergencies",
        name: "Chukwu Elizabeth (head of happines bank)"
    },
    {
        id: 5,
        content: "sureHealth has really lived up to its name. It's an absolutely reliable organization which has an incredible health plan with contact persons always on hand 24/7 to handle requests and emergencies.",
        name: "Chukwu Elizabeth (head of happines bank)"
    },
    {
        id: 6,
        content: "sureHealth has really lived up to its name. It's an absolutely reliable organization which has an incredible health plan with contact persons always on hand 24/7 to handle requests and emergencies.",
        name: "Chukwu Elizabeth (head of happines bank)"
    },
    {
        id: 7,
        content: "sureHealth has really lived up to its name. It's an absolutely reliable organization which has an incredible health plan with contact persons always on hand 24/7 to handle requests and emergencies.sureHealth has really lived up to its name. It's an absolutely reliable organization which has an incredible health plan with contact persons always on hand 24/7 to handle requests and emergencies.",
        name: "Chukwu Elizabeth (head of happines bank)"
    },
    {
        id: 8,
        content: "sureHealth has really lived up to its name. It's an absolutely reliable organization which has an incredible health plan with contact persons always on hand 24/7 to handle requests and emergencies.sureHealth has really lived up to its name. It's an absolutely reliable organization which has an incredible health plan with contact persons always on hand 24/7 to handle requests and emergencies.sureHealth has really lived up to its name. It's an absolutely reliable organization which has an incredible health plan with contact persons always on hand 24/7 to handle requests and emergencies",
        name: "Adewale yusuf"
    },
    {
        id: 9,
        content: "sureHealth has really lived up to its name. It's an absolutely reliable organization which has an incredible health plan with contact persons always on hand 24/7 to handle requests and emergencies.",
        name: " Olorundre ponmile(CEO peckfos)"
    },
    {
        id: 10,
        content: "Our relationship with sureHealth  has so far been productive and we know them to be proactive in making sure our staff readily access healthcare services. We find them to be administratively responsive, customer services oriented and instituting innovations to their services to our organisation",
        name: "Daniel Ayscough (Head, Human Resources, Jagal)"
    },
]
export const About = () => {

    return (
        <div>
            <div className='about' >
                <h1>What people are saying about us</h1>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                >
                    {
                        comments.map((info) => {
                            return <SwiperSlide>
                               
                                    
                                    <div className='comment-content' key={info.id}>
                                        <p>{info.content}</p>
                                        <h3>{info.name}</h3>
                                    </div>
                                  
                                    
                            </SwiperSlide>
                        })
                    }
                </Swiper>

            </div>
        </div>
    )
}
