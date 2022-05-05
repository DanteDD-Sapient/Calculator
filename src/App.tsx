import React, { useState } from 'react'
import Button from './components/button/Button'
import { Operation, calc } from './utility'

interface OutputState {
    current: string
    result: string
}
const defaultInput = {
    current: '',
    result: '',
}
function App() {
    const [operation, setOperation] = useState<Operation | ''>('')
    const [output, setOutput] = useState<OutputState>(defaultInput)
    const handleOperation = (input: Operation | '') => {
        setOperation(input)
        const current = Number(output.current)
        const result = Number(output.result)
        if (output.current === '') return
        if (output.result !== '' && operation) {
            setOutput({
                current: '',
                result: calc(operation, result, current).toString(),
            })
        } else {
            setOutput((prev) => ({ current: '', result: prev.current }))
        }
    }

    const handleInput = (e: any) => {
        setOutput((prev) => ({
            ...prev,
            current: prev.current.concat(e.target.innerHTML),
        }))
    }

    return (
        <div
            className="h-screen flex justify-center items-center bg-slate-300"
            data-testid="App"
        >
            <div className="grid grid-cols-4 gap-px w-80 bg-stone-900 shadow-lg rounded overflow-hidden ">
                <div
                    className="p-4 bg-slate-700 text-white text-right col-span-4"
                    data-testid="result"
                >
                    {output.result}
                </div>
                <div
                    className="p-4 bg-slate-700 text-white text-right col-span-4"
                    data-testid="current"
                >
                    {output.current}
                </div>
                <Button
                    classes="bg-slate-600"
                    handler={() => {
                        setOutput(defaultInput)
                        setOperation('')
                    }}
                >
                    AC
                </Button>
                <Button
                    classes="bg-slate-600"
                    handler={() => console.log('click')}
                >
                    +/-
                </Button>
                <Button
                    classes="bg-slate-600"
                    handler={() => handleOperation('Division')}
                >
                    %
                </Button>
                <Button
                    classes="bg-amber-500"
                    handler={() => handleOperation('Division')}
                >
                    &divide;
                </Button>
                <Button classes="bg-slate-500" handler={(e) => handleInput(e)}>
                    7
                </Button>
                <Button classes="bg-slate-500" handler={(e) => handleInput(e)}>
                    8
                </Button>
                <Button classes="bg-slate-500" handler={(e) => handleInput(e)}>
                    9
                </Button>
                <Button
                    classes="bg-amber-500"
                    handler={() => handleOperation('Multiplication')}
                >
                    x
                </Button>
                <Button classes="bg-slate-500" handler={(e) => handleInput(e)}>
                    4
                </Button>
                <Button classes="bg-slate-500" handler={(e) => handleInput(e)}>
                    5
                </Button>
                <Button classes="bg-slate-500" handler={(e) => handleInput(e)}>
                    6
                </Button>
                <Button
                    classes="bg-amber-500"
                    handler={() => handleOperation('Subtraction')}
                >
                    -
                </Button>
                <Button classes="bg-slate-500" handler={(e) => handleInput(e)}>
                    1
                </Button>
                <Button classes="bg-slate-500" handler={(e) => handleInput(e)}>
                    2
                </Button>
                <Button classes="bg-slate-500" handler={(e) => handleInput(e)}>
                    3
                </Button>
                <Button
                    classes="bg-amber-500"
                    handler={() => handleOperation('Addition')}
                >
                    +
                </Button>
                <Button
                    classes="bg-slate-500 col-span-2"
                    handler={(e) => handleInput(e)}
                >
                    0
                </Button>
                <Button
                    classes="bg-slate-500 "
                    handler={() =>
                        output.current.includes('.')
                            ? ''
                            : setOutput((prev) => ({
                                  ...prev,
                                  current: prev.current.concat('.'),
                              }))
                    }
                >
                    .
                </Button>
                <Button
                    classes="bg-amber-500"
                    handler={() => handleOperation(operation)}
                >
                    =
                </Button>
            </div>
        </div>
    )
}

export default App
