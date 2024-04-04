export async function getTodoList() {
    return new Promise((res) => {
        setTimeout(() => res([
            {
                id: 1,
                title: 'Buy laptop',
                isCompleted: false
            },
            {
                id: 2,
                title: 'Run laptop',
                isCompleted: false
            },
            {
                id: 3,
                title: 'Clean my room',
                isCompleted: true
            },
        ]), 250 - Math.random() * 200)
    })
}