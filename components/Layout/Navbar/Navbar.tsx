import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
	return (
		<>
			<nav className="flex bg-black p-5">
				<span className="font-bold tracking-wide text-white">
					Next.js minimalist starter
				</span>
				<div className="ml-auto">
					<a
						href="https://github.com/0xHz"
						aria-label="Github repository"
					>
						<FontAwesomeIcon
							icon={faGithub}
							size="xl"
							color="white"
						/>
					</a>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
