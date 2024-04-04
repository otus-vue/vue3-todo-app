export function sum(a, b) {
    return a + b;
}

export function div(a, b) {
    if (b === 0)
        throw new Error('ZeroDivisionError')

    return a/b
}

export function delay(ms) {
    return new Promise((res) => {
        setInterval(() => res(ms), ms)
    })
}