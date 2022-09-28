import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51LmqXjLnUBibthxk4ZZaR0OxDW3ZZB2nXln8RwAvVeeoX9cLuJLbZOd0D3oZ2HihTEc4PSzAsToOrEJ1hvVV9UzC00yFQ8ZXbP"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}