import App from "./App"
import { render, screen } from "@testing-library/react";

describe('App render test', () => {

    it('renders the heading', () => {
        render(<App />)
        const headingElement = screen.getByRole('heading', { name: /equal expert/i })
        expect(headingElement).toBeInTheDocument()
    })
})