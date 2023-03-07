import { useContext, useState } from "react"
import { Link } from "react-router-dom";
import Switch from "react-switch";
import { ThemeContext } from "styled-components"

import { Container } from "./styles";

interface Props {
	toggleTheme: () => void;
}



const Navbar = ({ toggleTheme }: Props) => {

	const { colors, title } = useContext(ThemeContext);


	return (
		<Container>
			<h2>
				<Link to={"/"}>
					Blog
				</Link>
			</h2>

			<ul>
				<li>
					<Link to={"/"}>Home</Link>

				</li>
				<li>

					<Link to={"/new"} className="new-btn" >Novo Post</Link>
				</li>
				<li>
					<Switch
						onChange={toggleTheme}
						checked={title === "dark"}
						checkedIcon={false}
						uncheckedIcon={false}
						height={10}
						width={40}
						handleDiameter={20}
						offColor={colors.text}
						onColor={colors.secondary}
					/>

				</li>
			</ul>
		</Container>
	)
}

export default Navbar