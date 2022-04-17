import React from 'react'

export interface Props {
    classes: string
    handler: () => void
    children: React.ReactChild
}
export default function Button({ classes, handler, children }: Props) {
    return (
        <button
            onClick={handler}
            className={`p-4 text-white cursor-pointer hover:opacity-90 ${classes}`}
            type="button"
        >
            {children}
        </button>
    )
}
