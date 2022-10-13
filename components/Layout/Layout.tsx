import Navbar from "components/Layout/Navbar/Navbar";

const Layout = ({ children }: LayoutType) => {
	return (
		<>
			<Navbar />
			<div className="px-5">{children}</div>
		</>
	);
};

export default Layout;
