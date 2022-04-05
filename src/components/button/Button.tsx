import React from 'react'

export interface Props {
    classes: string
    handler: () => void
}
export default function Button({ classes, handler }: Props) {
    return (
        <button
            onClick={handler}
            className={`p-4 text-white ${classes}`}
            type="button"
        >
            button
        </button>
    )
}
