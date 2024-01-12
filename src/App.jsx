import "./App.css";
import StarBucksLogo from "./assets/StarBucksLogo";
import Button from "./components/Button/Button";
import NavBar from "./components/NavBar/NavBar";
import Wrapper from "./components/WrapperSection/Wrapper";

function App() {
	return (
		<>
			<nav>
				<div className="flex h-[51px] bg-slate-200">
					<div>
						<StarBucksLogo />
					</div>
					<NavBar />
				</div>
			</nav>
			<Button title="Check Out"/>
			<Button />

			<Wrapper
				imageSrc="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-88178.jpg"
				text="Hand holding a phone with a Cafe Latte and Bacon Gouda sandwich."
				>
				<div>First Child</div>
				<div>Second Child</div>
			</Wrapper>

			<Wrapper
				imageSrc="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-88117.jpg"
				text="A Starbucks® beverage and food item near a mobile phone with Starbucks mobile app pay screen open. They are surrounded by gold Stars."	
			/>
			<Wrapper
				imageSrc="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-88122.jpg"
				text="A cold espresso drink in a tall, clear glass with a creamy marbling that gets darker toward the bottom."
			/>
			<Wrapper
				imageSrc="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-88120.jpg"
				text="A latte with crema on top next to a cold coffee with frothy topping, both in clear glasses."
			/>
			<Wrapper
				imageSrc="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-88124.jpg"
				text="Two square, egg-based breakfast items with bits of spinach and chives showing."
			/>
			<Wrapper
				imageSrc="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-88216.jpg"
				text="Two tumblers and one cold cup featuring Alison Bremner's art on a colored background."
			/>
			
		</>
	);
}

export default App;
