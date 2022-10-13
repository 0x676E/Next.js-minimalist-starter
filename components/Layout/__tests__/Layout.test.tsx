import { render } from "@testing-library/react";

import Layout from "../Layout";

describe("<Layout />", () => {
	it("should render Layout component", () => {
		const { container } = render(<Layout>children</Layout>);

		expect(container.firstChild).toMatchSnapshot();
	});
});
