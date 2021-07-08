import React from "react";
import { render, fireEvent, getByText, getByTestId } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
})

test("form shows success message on submit with form details", () => {
    // test values 
    const { getByTestId, getByLabelText, getByText } =render (<CheckoutForm />)
    const firstName = getByLabelText(/first name:/i)
    const lastName =  getByLabelText(/last name:/i)
    const address = getByLabelText(/address:/i)
    const city = getByLabelText(/city:/i)
    const state = getByLabelText(/state:/i)
    const zip = getByLabelText(/zip:/i)
    const checkout = getByTestId('checkout')

    // expected values 
    expect(firstName).toBeInTheDocument()
    expect(lastName).toBeInTheDocument()
    expect(address).toBeInTheDocument()
    expect(city).toBeInTheDocument()
    expect(state).toBeInTheDocument()
    expect(zip).toBeInTheDocument()
    expect(checkout).toBeInTheDocument()

    // test data 
    fireEvent.change(firstName, {target:{value: 'Donald'}})
    fireEvent.change(lastName, {target:{value: 'Duck'}})
    fireEvent.change(address, {target: {value: '1313 Webfoot Street'}})
    fireEvent.change(city, {target: {value: 'DuckBerg'}})
    fireEvent.change(state, {target: {value: 'Calisota'}})
    fireEvent.change(zip, {target: {value: '94515'}})
    fireEvent.click(checkout)

    const messageSuccess = getByTestId('successMessage')

    expect(messageSuccess).toBeInTheDocument()

    const messageSuccessName = getByText(/Donald Duck/i)
    const messageSuccessAdd = getByText(/1313 Webfoot Street/i)
    const messageSuccessCity = getByText(/Duckberg/i)
    const messageSuccessST = getByText(/Calisota/i)
    const messageSuccessZip = getByText(/94515/i)

    expect(messageSuccessName).toBeInTheDocument()
    expect(messageSuccessAdd).toBeInTheDocument()
    expect(messageSuccessCity).toBeInTheDocument()
    expect(messageSuccessST).toBeInTheDocument()
    expect(messageSuccessZip).toBeInTheDocument()


});
