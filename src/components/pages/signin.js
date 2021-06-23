import React, {useState} from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import AccountBox from "../Login/AccountBox/index.jsx"
import styled from 'styled-components'

const SignInWrapper = styled.div`
	background: #090f0f;
	height: 91vh;
`;

const SignInContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const SignInPage = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};
	
	return (
		<>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle} />
			<SignInWrapper>
				<SignInContainer>
					<AccountBox />
				</SignInContainer>
			</SignInWrapper>
			
		</>
	);
	
};

export default SignInPage;
