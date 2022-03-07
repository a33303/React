import { Form } from "./Form"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import React from "react";


describe('createForm', () => {
    it('to be Function ', function () {
        expect(Form).toBeInstanceOf(Function)
    })
    it('renders from component Form ', function () {
        render(<Form addMessage={() => null} />)
        expect(screen.getByText('Send')).toBeInTheDocument()
        expect(screen.getByTestId('input')).toBeTruthy()
    })
    it('snapshot from component Form ', function () {
      const { asFragment } = render(<Form addMessage={() => null} />)
      expect(asFragment()).toMatchSnapshot()
    })
})