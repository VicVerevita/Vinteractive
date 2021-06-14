import React, {useState} from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import HeroSection from "../Hero/Hero";
import InfoSection from "../InfoSection/InfoSection";
import {homeObjOne, homeObjTwo} from "../InfoSection/Data";

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle} />
			<HeroSection />
			<InfoSection {...homeObjOne} />
			<InfoSection {...homeObjTwo} />
		</>
	);
};

export default Home;
