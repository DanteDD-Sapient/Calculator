import React from 'react'
import { render } from '@testing-library/react'
import Button from './Button'

it('renders correctly', () => {
    const { queryByTestId, queryByText } = render(<Button>9</Button>)

    expect(queryByTestId('9')).toBeTruthy()
    expect(queryByText('9')).toBeTruthy()
})
