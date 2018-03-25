import { plus } from "../src/index";

describe("This is a simple test", () => {
    test("Check the plus function", () => {
        expect(plus(2, 3)).toEqual(5);
    });
});
