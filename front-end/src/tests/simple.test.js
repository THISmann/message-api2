import { expect, test } from "vitest"

const user = {
    name: "etienne",
    age: 24
}

test("etienne is 24", () => {
    expect(user.name).toBe("etienne");
    expect(user.age).toBe(24);
})