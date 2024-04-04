import {render, fireEvent, screen} from '@testing-library/vue'
import App from "@/App.vue";
import userEvent from "@testing-library/user-event";
import * as service from "@/services/todoList";

describe('TodoApp', () => {
    it('should add new todo item', async () => {
        const user = userEvent.setup()

        const app = render(App)
        const input = app.getByPlaceholderText("What needs to be done?")

        await user.type(input, "New todo{Enter}")
        app.getByText("New todo", {exact: false})
    });

    it('should edit todo item', async () => {
        const getTodoListSpy = vi.spyOn(service, 'getTodoList').mockImplementation(() => {
            return Promise.resolve([{
                id: 1,
                title: 'Buy laptop',
                isCompleted: false
            }])
        })

        const user = userEvent.setup()

        const app = render(App)
        const label = await app.findByText("Buy laptop", {exact: false})

        await user.dblClick(label)
        // #1
        const input = app.getByDisplayValue("Buy laptop")

        // #2
        // app.getByTestId() // add in html

        // #3
        const input1 = label.closest('.todo').querySelector('input.edit')

        expect(input).toStrictEqual(input1)

        await user.type(input1, "new value{Enter}")
        app.getByText("new value", {exact: false})
        expect(getTodoListSpy).toHaveBeenCalled()
    });

    it('should mark todo item as completed', async () => {
        const getTodoListSpy = vi.spyOn(service, 'getTodoList').mockImplementation(() => {
            return Promise.resolve([{
                id: 1,
                title: 'Buy laptop',
                isCompleted: false
            }])
        })

        const user = userEvent.setup()

        const app = render(App)
        const label = await app.findByText("Buy laptop", {exact: false})

        const toggle = label.closest('.view').querySelector('input')
        await user.click(toggle)

        const todoEL = toggle.closest('.todo')
        expect(todoEL).toHaveClass('completed')
    });

    it('should delete todo item from list', async () => {
        const getTodoListSpy = vi.spyOn(service, 'getTodoList').mockImplementation(() => {
            return Promise.resolve([{
                id: 1,
                title: 'Buy laptop',
                isCompleted: false
            }])
        })

        const user = userEvent.setup()

        const app = render(App)
        const label = await app.findByText("Buy laptop", {exact: false})

        const deleteButton = label.closest('.view').querySelector('button')

        await user.click(deleteButton)

        expect(label.closest('.view')).not.toBeInTheDocument()
    });
})