import React from "react";
import {FaBars} from "react-icons/fa";
import SvgInteractiveLogo from "../Logo/SvgVinteractiveLogo";
import {
	Nav,
	NavbarContainer,
	NavLogo,
	MobileIcon,
	NavMenu,
	NavItem,
	NavLinks,
	NavBtn,
	NavBtnLink,
} from "./NavbarElements";

const Navbar = ({toggle}) => {
	return (
		<>
			<Nav>
				<NavbarContainer>
					<NavLogo to="/"></NavLogo>
					<SvgInteractiveLogo />
					<MobileIcon onClick={toggle}>
						<FaBars />
					</MobileIcon>
					<NavMenu>
						<NavItem>
							<NavLinks to="about">About</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="projects">Projects</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="blog">Blog</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="contact">Contact</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="signup">Sign Up</NavLinks>
						</NavItem>
					</NavMenu>
					<NavBtn>
						<NavBtnLink to="/Signin">Sign In</NavBtnLink>
					</NavBtn>
				</NavbarContainer>
			</Nav>
		</>
	);
};

export default Navbar;
