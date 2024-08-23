// import { Component } from "react";
import Header from "./components/Header";
import "../resource/css/styles.css";
import SectionOne from "./components/SectionOne";
import HighlightSection from "./components/HighlightSection";
import SectionTwo from "./components/SectionTwo";
import Main from './components/Main'
import Mainsec from "./components/Mainsec";
import Footer from "./components/Footer";
// import SectionThree from "./components/SectionThree";

// export default class App extends Component {
// 	render() {
// 		return(
//         <>
//     <Header/>
//     <SectionOne/>
//         </>)
// 	}
// }
const App = () => {
	// const thirdHighlightProps = {
	// 	wrapperClass: "fourth-heghlight-wrapper",
	// 	logo: "../resource/images/icons/apple-tv-logo.png",
	// 	image: "",
	// 	description: `With the Always-On Retina display. 
    //         You’ve never seen a watch like this.`,
    //     desc_two:`Get letaset CDC `+ <br/> + ` Covid response`,    
	// 	links: [
	// 		{ url: "", text: "Learn more" },
	// 		{ url: "", text: "Buy" },
	// 	],
	// };

	// const highlightSections = [
	// 	{
	// 		wrapperClass: "sixth-heghlight-wrapper",
	// 		title: "iPhone 11",
	// 		description: "Just the right amount of everything.",
	// 		price: "From $18.70/mo. or $499 with trade‑in.<sup>1</sup>",
	// 		links: [
	// 			{ url: "", text: "Learn more" },
	// 			{ url: "", text: "Apply now" },
	// 		],
	// 		isLeft: true,
	// 	},
	// 	{
	// 		wrapperClass: "sixth-heghlight-wrapper",
	// 		title: "Apple Card Monthly Installments",
	// 		description:
	// 			"Pay for your next iPhone over time, interest-free with Apple Card.",
	// 		links: [
	// 			{ url: "", text: "Learn more" },
	// 			{ url: "", text: "Apply now" },
	// 		],
	// 		isLeft: false,
	// 	},
	// 	{
	// 		wrapperClass: "sixth-heghlight-wrapper",
	// 		logo: "images/icons/arcade.png",
	// 		description: "Agent 8 is a small hero on a big mission.",
	// 		links: [
	// 			{ url: "", text: "Play now", sup: "2" },
	// 			{ url: "", text: "Learn about Apple Arcade" },
	// 		],
	// 		linkClass: "white",
	// 		isLeft: true,
	// 	},
	// 	{
	// 		wrapperClass: "sixth-heghlight-wrapper",
	// 		title: "Get the latest CDC response to COVID-19.",
	// 		links: [{ url: "", text: "Watch the PSA" }],
	// 		linkClass: "white",
	// 		isLeft: false,
	// 	},
	// ];


	return (
		<>
			<Header />
			<SectionOne />

			<HighlightSection
				sectionClass="first-hightlight-wrapper"
				newAlert={true}
				title="iPad Pro"
				learnMoreLink="#"
				orderLink="#"
				captionLeft="iPad Pro available starting 3.25"
				captionRight="Magic Keyboard coming in May"
			/>
			<HighlightSection
				sectionClass="second-hightlight-wrapper"
				newAlert={true}
				title="MacBook Air"
				description="Twice the speed. Twice the storage."
				price="From $999."
				learnMoreLink="#"
				orderLink="#"
			/>
			<HighlightSection
				sectionClass="third-hightlight-wrapper"
				newAlert={false}
				title="Apple Watch"
				description="The future of health is on your wrist."
				learnMoreLink="#"
				orderLink="#"
			/>
			{/* <div>
				<SectionTwo {...thirdHighlightProps} />
			</div> */}
			{/* <div>
				<SectionTwo/>
			</div> */}
			{/* <div>
				{highlightSections.map((section, index) => (
					<SectionThree key={index} {...section} />
				))}
			</div> */}
            <Mainsec/>
            <Main/>
           
            <Footer/>

		</>
	);
};

export default App;
