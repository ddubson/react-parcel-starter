import {AppRoot} from "../src/AppRoot";
import React from "react";
import { render } from "@testing-library/react"

describe("AppRoot", () => {
    it("should load", async () => {
        const app = await render(<AppRoot />);
        expect(app.getByTestId("hello").textContent).toEqual("Hello World!")
    });
});
