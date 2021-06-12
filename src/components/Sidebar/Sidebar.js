import React from "react";
import {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarWrapper,
	SidebarMenu,
	SidebarLink,
	SidebarBtnWrapper,
	SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({isOpen, toggle}) => {
	return (
		<>
			<SidebarContainer isOpen={isOpen} onClick={toggle}>
				<Icon onClick={toggle}>
					<CloseIcon />
				</Icon>
				<SidebarWrapper>
					<SidebarMenu>
						<SidebarLink to="about" onClick={toggle}>
							About
						</SidebarLink>
						<SidebarLink to="projects" onClick={toggle}>
							Projects
						</SidebarLink>
						<SidebarLink to="blog" onClick={toggle}>
							Blog
						</SidebarLink>
						<SidebarLink to="contact" onClick={toggle}>
							Contact
						</SidebarLink>
						<SidebarLink to="signup" onClick={toggle}>
							Sign Up
						</SidebarLink>
					</SidebarMenu>
					<SidebarBtnWrapper>
						<SidebarRoute to="/signin">Sign In</SidebarRoute>
					</SidebarBtnWrapper>
				</SidebarWrapper>
			</SidebarContainer>
		</>
	);
};

export default Sidebar;
