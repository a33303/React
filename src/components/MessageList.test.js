import { MessageList } from "./MessageList"
import renderer from 'react-test-renderer'
import React from "react"
import userEvent from "@testing-library/user-event";

describe('createMessageList', () => {
    it('to be Function ', function () {
        expect(MessageList).toBeInstanceOf(Function)
})
    it('renders from component MessageList', function () {
        const element = renderer
            .create(<MessageList />)
        expect(element).toMatchSnapshot()
    })
    it('test component', function () {
      expect(screen.getByTestId('ul')).toBe('li')
      expect(screen.getByTestId('Li')).toBe(' ')
    })
// проверить надо сообщение на id6 name6 text в ul->li

})