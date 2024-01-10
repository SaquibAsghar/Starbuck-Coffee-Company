import "./App.css";
import StarBucksLogo from "./assets/StarBucksLogo";
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

			<Wrapper>
				<div>First Child</div>
				<div>Second Child</div>
			</Wrapper>

			<Wrapper />
			<Wrapper />
			<Wrapper />
			<Wrapper />
			<Wrapper />
		</>
	);
}

export default App;
