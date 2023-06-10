import busImg from '../assets/business.jpg'
import family from '../assets/img1.jpg'
import parents from '../assets/parents.webp'
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard} from "react-icons/fa";
import { FaCcStripe} from "react-icons/fa";
import { FaCcAmazonPay } from "react-icons/fa";
import { FcCustomerSupport} from "react-icons/fc";
import { GrNetwork} from "react-icons/gr";



export const Data = [
    {
        id: 1,
       state: "Abuja",
       name: "Lekfad Medical Centre",
       location: "garki",
      price: 5000,
      plan:'Gold'
      
      },
      {
       id: 2,
       state: "Abuja",
       name: " UDUTH SOKOTO",
       location: "fct",
       price: 95000,
       plan:'silver'
      },
      {
       id: 3,
       state: "Abuja",
       name: "Regions Stroke and Neuroscience Hospital, Mgbirichi",
       location: "iyanyan",
       price: 15000,
       plan:'Bronze'
      },
      {
       id: 4,
       state: "Abuja",
       name: "Aminu Kano Teaching Hospital",
       location: "kubwa",
       price: 15000,
       plan:'Gold'
      },
      {
       id: 5,
       state: "Abuja",
       name: "University of Abuja Teaching Hospital",
       location: "fct",
       price: 15000,
       plan:'silver'
      },
      {
       id: 6,
       state: "Abuja",
       name: "University Teaching Hospital",
       location: "gwarinpa",
       price: 19000,
       plan:'Gold'
      },
      {
       id: 7,
       state: "Abuja",
       name: "University College Hospital",
       location: "kubwa",
       price: 11000,
       plan:'Bronze'
      },
      {
       id: 8,
       state: "Abuja",
       name: "University College Hospital",
       location: "garki",
       price: 13000,
       plan:'Gold'
      },
      {
       id: 9,
       state: "Lagos",
       name: "University Teaching Hospital (LUTH)",
       location: "ikeja",
       price: 14000,
       plan:'Gold'
      },
      {
       id: 10,
       state: "Lagos",
       name: "Lagos University Teaching Hospital (LUTH)",
       location: "ikeja",
       price: 17000,
       plan:'Bronze'
      },
      {
       id: 11,
       state: "Lagos",
       name: "Lagos University Teaching Hospital (LUTH)",
       location: "ikeja",
       price: 15000,
      plan:'Bronze'
      },
      {
       id: 12,
       state: "Lagos",
       name: "Duchess International Hospital",
       location: "shasha",
       price: 35000,
       plan:'Silver'
      },
      {
       id: 13,
       state: "Lagos",
       name: "Lagos State University Teaching Hospital (LASUTH)",
       location: "ikeja",
       price: 45000,
       plan:'Silver'
      },
      {
       id: 14,
       state: "Lagos",
       name: "Yaba Psychiatric Hospital",
       location: "yaba",
       price: 50000,
       plan:'Silver'
      },
      {
       id: 15,
       state: "Lagos",
       name: "Gbagada General Hospital",
       location: "lagos",
       price: 45000,
       plan:'Silver'
      },
      {
       id: 16,
       state: "Lagos",
       name: "Holy trinity hospital",
       location: "lagos",
       price: 75000,
       plan:'Silver'
      },
      {
       id: 17,
       state: "Lagos",
       name: "Isolo General Hospital",
       location: "oshodi isolo",
       price: 55000,
       plan:'Silver'
      },
      {
       id: 18,
       state: "Lagos",
       name: "Adefemi Hospital",
       location: "lagos",
       price:15000,
       plan:'Silver'
      },
      {
       id: 19,
       state: "Lagos",
       name: "Ikorodu General Hospital",
       location: "ikorodu",
       price :15000,
       plan:'Silver'
      }
       
]






export const healthplans = [
    {
        id:1,
        image:busImg,
        alt: 'businessimage',
        header:'For your business',
        text:'Health insurance that won\'t disappoint you or your employees',
        button:"Learn more",
        buy:"Buy now",
        link:"/business"
    },
    {
        id:2,
        image:family,
        alt:"businesimg",
        header:'For your family',
        text:'Get up to N1.8M in medical coverage with our monthly health insurance plans',
        button:"Learn more",
        buy:"Buy now",
        link:"/family"
    },
    {
        id:3,
        image:parents,
        alt:"businesimg",
        header:'For your parents',
        text:'Peace of mind that Papa and Mama’s health are taken care of',
        button:"Learn more",
        buy:"Buy now",
        link:"/parent"
    }
]

export const workplan = [
    {
        id:1,
        image:<FaCcVisa/>,
        alt: 'card',
        header:'Pay online',
        text:'Choose between the monthly, quarterly or yearly payment periods and select any of our health insurance plans that fit your needs',
       
       
    },
    {
        id:2,
        image:<FaCcMastercard/>,
        alt:"card",
        header:'Pick your preferred plan',
        text:'Enter your details and pay online with your card. It’s very simple',
       
    },
    {
        id:3,
        image:<FaCcStripe/>,
        alt:"card",
        header:'Start accessing care!',
        text:'After paying, watch out for the series of emails you’ll get from your no. 1 HMO in Nigeria, explaining how to use your health plans to stay healthy.',
        
    },
    {
        id:4,
        image:<FaCcStripe/>,
        alt:"card",
        header:'Start accessing care!',
        text:'After paying, watch out for the series of emails you’ll get from your no. 1 HMO in Nigeria, explaining how to use your health plans to stay healthy.',
        
    }
]


export const plan = [
    {
        id:1,
        image:<FaCcVisa/>,
        alt: 'card',
        header:'Select your preferred hospital',
        text:`A matching health insurance plan will be selected for you and the add-on is priced based on the hospital you select.
        If you have selected a plan already, you will have to choose what plan you want the PEC benefit to be added to`,
       
       
    },
    {
        id:2,
        image:<FaCcMastercard/>,
        alt:"card",
        header:'Pay online',
        text:'Enter your details and pay online with your card. It’s all very simple',
       
    },
    {
        id:3,
        image:<FaCcStripe/>,
        alt:"card",
        header:'Start accessing care!',
        text:'After paying, watch out for the series of emails you’ll get from your no. 1 HMO in Nigeria, explaining how to use your health plans to stay healthy.',
        
    }
]




export const Familyplan = [
    {
        id:1,
        image:<FaCcAmazonPay/>,
        alt: 'card',
        header:'Flexible payments',
        text:'Pay monthly, quarterly or annually',
        
       
    },
    {
        id:2,
        image:<FcCustomerSupport/>,
        alt:"card",
        header:'Unlock more benefits',
        text:'Zero wait times. You can always rely on us to be reachable at anytime of the day, every day of the week.',
        
    },
    {
        id:3,
        image:<GrNetwork/>,
        alt:"card",
        header:'Start accessing care!',
        text:'We increase your health benefits every quarter and we won’t increase the price. Read how our graduated benefits work.',
      
        
    },
    {
       id:4,
       image:<GrNetwork/>,
       alt:"card",
       header:'Best hospitals near you',
       text:`We're partners with over 1,500 hospitals across Nigeria which means no matter where you are, you can get access to good quality healthcare. See our hospital list`,
     
       
   },
   {
       id:5,
       image:<GrNetwork/>,
       alt:"card",
       header:'Healthy you? Get paid',
       text:`Bonus: If you stay healthy, we'll pay you back 20% of your annual payment. No questions asked!`,
     
       
   }
]

export const businessplan = [
    {
        id:1,
        image:<FaCcAmazonPay/>,
        alt: 'card',
        header:'No more form stress',
        text:'No more form stress',
        
       
    },
    {
        id:2,
        image:<FcCustomerSupport/>,
        alt:"card",
        header:'Hospitals love us',
        text:'Hospitals across Nigeria will treat your employees like royalty because we pay their claims in under 48 hours and don’t owe.',
        
    },
    {
        id:3,
        image:<GrNetwork/>,
        alt:"card",
        header:'SAvailable 24 hours a day',
        text:'You can always rely on us to be reachable by your employees or the hospital, 24 hours a day',
      
        
    },
    {
       id:4,
       image:<GrNetwork/>,
       alt:"card",
       header:'Dedicated Account Manager',
       text:`If you have more than 10 employees, you’ll get a Key Account Manager for every request you have`,
     
       
   },
   {
       id:5,
       image:<GrNetwork/>,
       alt:"card",
       header:'Cost effective health insurance',
       text:`Our sales people will get you a plan that works for your business`,
     
       
   }
]


export const parentplan = [
    {
        id:1,
        image:<FaCcVisa/>,
        alt: 'card',
        header:'Select your preferred hospital',
        text:`A matching health insurance plan will be selected for you and the add-on is priced based on the hospital you select.
        If you have selected a plan already, you will have to choose what plan you want the PEC benefit to be added to`,
       
       
    },
    {
        id:2,
        image:<FaCcMastercard/>,
        alt:"card",
        header:'Pay online',
        text:'Enter your details and pay online with your card. It’s all very simple',
       
    },
    {
        id:3,
        image:<FaCcStripe/>,
        alt:"card",
        header:'Start accessing care!',
        text:'After paying, watch out for the series of emails you’ll get from your no. 1 HMO in Nigeria, explaining how to use your health plans to stay healthy.',
        
    },
    {
        id:4,
        image:<FaCcStripe/>,
        alt:"card",
        header:'Start accessing care!',
        text:'After paying, watch out for the series of emails you’ll get from your no. 1 HMO in Nigeria, explaining how to use your health plans to stay healthy.',
        
    },
    {
        id:5,
        image:<FaCcStripe/>,
        alt:"card",
        header:'Start accessing care!',
        text:'After paying, watch out for the series of emails you’ll get from your no. 1 HMO in Nigeria, explaining how to use your health plans to stay healthy.',
        
    }
]




export const bookplan = [
    {
        id:1,
        name:'HAPPY',
        header:'3 months',
        text:'Health insurance that won\'t disappoint you or your employees',
        person:'monthly',
        cost: '#400',
        buy:"Buy now",
        days:20,
        num:3
        
        
    },
    {
        id:2,
        name:'BRAVE',
        header:'6 months',
        text:'Health insurance that won\'t disappoint you or your employees',
        person:'monthly',
        cost: '#500',
        buy:"Buy now",
        days:30,
        num:5
       
    },
    {
        id:3,
        name:'EXCELLENT',
        header:'12 months',
        person:'monthly',
        text:'Health insurance that won\'t disappoint you or your employees',
        cost: '#1000',
        buy:"Buy now",
        days:45,
        num:5
    }
]


export const anualplan = [
    {
        id:1,
        name:'HAPPY',
        header:'anually',
        text:'Health insurance that won\'t disappoint you or your employees',
        person:'person per year',
        cost: '#100,000',
        buy:"Buy now",
        days:20,
        num:3
        
        
    },
    {
        id:2,
        name:'BRAVE',
        header:'anual',
        text:'Health insurance that won\'t disappoint you or your employees',
        person:'person per year',
        cost: '#300,000',
        buy:"Buy now",
        days:30,
        num:5
       
    },
    {
        id:3,
        name:'EXCELLENT',
        header:'anual',
        person:'person per year',
        text:'Health insurance that won\'t disappoint you or your employees',
        cost: '#500,000',
        buy:"Buy now",
        days:45,
        num:5
    }
]

export const LoginType = [
    {
        id:1,
        image:family,
        alt:"For Affiliate",
        path:"/loginA",
        header:'For Affiliate',
        text:'Log in as a RelianceHMO affiliate to get access to your dashboard where you can monitor/cash-out your earnings, view reports, and download marketing assets..',
        
    } ,
{
    id:2,
    image:parents,
    alt:"hospital",
    path:"/loginB",
    header:'For Hospitals',
    text:'Log in to submit your claims, validate enrollees and more.',
   
},
{ id:3,
    image:busImg,
    alt: 'business',
    path:"/loginC",
    header:'For Businesses',
    text:`Get access to your company dashboard, where you can view insured staff, add or remove from your staff list, view usage statistics and more.`,
   
   
}

]








