import {div, sum, delay} from "@/services/sum";
import userEvent from '@testing-library/user-event'


describe('math', () => {
    describe('sum', () => {
        describe('positive', () => {
            it.each([[1,3,4],[-2,1,-1],[0,1,1]])
            ('should sum up two numbers %s+%s=%s', async (a, b, expectedResult) => {
                // Act
                const result = sum(a, b)

                // Assert
                expect(result).toEqual(expectedResult)
                expect(result).not.toEqual(7)
                expect(result).toBeDefined()
            });
        })
    });

    describe('div', () => {
        it('should throw an error on division by 0', async () => {
            const result = () => div(1,0)
            expect(result).toThrowError('ZeroDivisionError')
        });
    })

    describe('delay', () => {
        it('should work', () => {
            expect(delay(100)).resolves.toBe(100)
        });
    });
});