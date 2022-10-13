import { render } from "@testing-library/react";

import Navbar from "../Navbar/Navbar";

describe("<Navbar />", () => {
	it("should render Navbar component", () => {
		const { container } = render(<Navbar />);

		expect(container.firstChild).toMatchSnapshot();
	});
});
