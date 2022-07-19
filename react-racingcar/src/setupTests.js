import "@testing-library/jest-dom";

const pickNumberInRange = jest.fn()

beforeEach(() => {
    global.MissionUtils = {
        Random: {
            pickNumberInRange
        }
    }
});