import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
    test('App renders', () => {
        render(<App />)
        expect(screen.getByTestId('App')).toBeTruthy()
    })
    test('Button click has text rendered', () => {
        render(<App />)
        const btn = screen.getByTestId('1')
        fireEvent.click(btn)
        expect(screen.getByTestId('current')).toHaveTextContent('1')
    })
    test('Calculations return the expected result', () => {
        render(<App />)
        const btn = screen.getByTestId('1')
        const add = screen.getByTestId('+')
        const equals = screen.getByTestId('=')
        fireEvent.click(btn)
        fireEvent.click(add)
        fireEvent.click(btn)
        fireEvent.click(equals)
        expect(screen.getByTestId('result')).toHaveTextContent('2')
    })
    test('AC button clears all content', () => {
        render(<App />)
        const btn = screen.getByTestId('1')
        const add = screen.getByTestId('+')
        const ac = screen.getByTestId('AC')
        fireEvent.click(btn)
        fireEvent.click(add)
        fireEvent.click(btn)
        fireEvent.click(ac)
        expect(screen.getByTestId('current').innerHTML === '').toBeTruthy()
        expect(screen.getByTestId('result').innerHTML === '').toBeTruthy()
    })
    test('Decimal point cannot be added twice', () => {
        render(<App />)
        const decimal = screen.getByTestId('.')
        fireEvent.click(decimal)
        fireEvent.click(decimal)
        expect(screen.getByTestId('current')).toHaveTextContent('.')
        expect(screen.getByTestId('current').innerHTML === '..').toBeFalsy()
    })
})
