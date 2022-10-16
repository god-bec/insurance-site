import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import React, { useState } from 'react'
import { About } from "./about/About"
import './Stylepay.css'



const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
        base: {
            iconColor: "#c4f0ff",
            color: "#fff",
            fontWeight: 500,
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
            fontSize: "16px",
            fontSmoothing: "antialiased",
            ":-webkit-autofill": { color: "#fce883" },
            "::placeholder": { color: "#87bbfd" }
        },
        invalid: {
            iconColor: "#ffc7ee",
            color: "#ffc7ee"
        }
    }
}

export default function PaymentForm() {
    const [success, setSuccess] = useState(false)
    const stripe = useStripe()
    const elements = useElements()


    const handleSubmit = async (e) => {
        e.preventDefault()
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })


        if (!error) {
            try {
                const { id } = paymentMethod
                const response = await axios.post("http://localhost:4000/payment", {
                    amount: 6000,
                    id
                })

                if (response.data.success) {
                    console.log("Successful payment")
                    setSuccess(true)
                }

            } catch (error) {
                console.log("Error", error)
            }
        } else {
            console.log(error)
        }
    }

    return (
        <>
            <div className="form-container">
                {!success ?
                    <form onSubmit={handleSubmit} className="formfeild">
                        <h1>sureHealth Insurance</h1>
                        <fieldset className="FormGroup">
                            <div className="FormRow">
                                <CardElement options={CARD_OPTIONS} />
                            </div>
                        </fieldset>
                        <button>Pay</button>
                    </form>
                    
                    :
                    <div>
                        <h2>You just made the best choice today, thank you for choosing us</h2>
                    </div>
                }
                <About/>
                
            </div>
        </>
    )
}