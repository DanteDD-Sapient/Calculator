import React from 'react'
import Button from './components/button/Button'

function App() {
    return (
        <Button classes="bg-slate-500 " handler={() => console.log('click')} />
    )
}

export default App
