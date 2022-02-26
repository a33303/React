import { ChatsList } from "./ChatsList"
import renderer from 'react-test-renderer'
import React from "react"
import { render, screen } from "@testing-library/react"

describe('createChatList', () => {
    it('to be Function ', function () {
        expect(ChatsList).toBeInstanceOf(Function)
    })
    it('renders from component - ChatsList ', function () {
        const tree = renderer
            .create(<ChatsList />)
        expect(tree).toMatchSnapshot()

    })
})