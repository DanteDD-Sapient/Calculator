import React from 'react'
import Button from './components/button/Button'

function App() {
    return (
        <div className="h-screen flex justify-center items-center bg-slate-300">
            <div className="grid grid-cols-4 gap-px w-80 bg-stone-900 shadow-lg rounded overflow-hidden ">
                <div className="p-4 bg-slate-700 text-white text-right col-span-4">
                    input
                </div>
                <Button
                    classes="bg-slate-600"
                    handler={() => console.log('click')}
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
                    handler={() => console.log('click')}
                >
                    %
                </Button>
                <Button
                    classes="bg-amber-500"
                    handler={() => console.log('click')}
                >
                    &divide;
                </Button>
                <Button
                    classes="bg-slate-500"
                    handler={() => console.log('click')}
                >
                    7
                </Button>
                <Button
                    classes="bg-slate-500"
                    handler={() => console.log('click')}
                >
                    8
                </Button>
                <Button
                    classes="bg-slate-500"
                    handler={() => console.log('click')}
                >
                    9
                </Button>
                <Button
                    classes="bg-amber-500"
                    handler={() => console.log('click')}
                >
                    x
                </Button>
                <Button
                    classes="bg-slate-500"
                    handler={() => console.log('click')}
                >
                    4
                </Button>
                <Button
                    classes="bg-slate-500"
                    handler={() => console.log('click')}
                >
                    5
                </Button>
                <Button
                    classes="bg-slate-500"
                    handler={() => console.log('click')}
                >
                    6
                </Button>
                <Button
                    classes="bg-amber-500"
                    handler={() => console.log('click')}
                >
                    -
                </Button>
                <Button
                    classes="bg-slate-500"
                    handler={() => console.log('click')}
                >
                    1
                </Button>
                <Button
                    classes="bg-slate-500"
                    handler={() => console.log('click')}
                >
                    2
                </Button>
                <Button
                    classes="bg-slate-500"
                    handler={() => console.log('click')}
                >
                    3
                </Button>
                <Button
                    classes="bg-amber-500"
                    handler={() => console.log('click')}
                >
                    +
                </Button>
                <Button
                    classes="bg-slate-500 col-span-2"
                    handler={() => console.log('click')}
                >
                    0
                </Button>
                <Button
                    classes="bg-slate-500 "
                    handler={() => console.log('click')}
                >
                    .
                </Button>
                <Button
                    classes="bg-amber-500"
                    handler={() => console.log('click')}
                >
                    =
                </Button>
            </div>
        </div>
    )
}

export default App
