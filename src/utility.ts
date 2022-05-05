export type Operation =
    | 'Addition'
    | 'Subtraction'
    | 'Multiplication'
    | 'Division'

export const add = (a: number, b: number) => a + b

export const subtract = (a: number, b: number) => a - b

export const divide = (a: number, b: number) => a / b

export const multiply = (a: number, b: number) => a * b

export const plusMinus = (num: number) =>
    num < 0 ? Math.abs(num) : -Math.abs(num)

export const calc = (operation: Operation, a: number, b: number) => {
    switch (operation) {
        case 'Addition':
            return add(a, b)
        case 'Subtraction':
            return subtract(a, b)
        case 'Division':
            return divide(a, b)
        case 'Multiplication':
            return multiply(a, b)
        default:
            return add(a, b)
    }
}
