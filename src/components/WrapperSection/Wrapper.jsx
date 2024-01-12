import Button from "../Button/Button";

const Wrapper = (props) => {
	return (
		<div className="container bg-cyan-400 flex justify-between my-6 odd:flex-row-reverse">
			<div className="flex-grow bg-red-300 w-1/2 flex flex-col justify-center items-center">
				<div className="py-5">
					<h2>New Year, New Yay</h2>
					<p>
						Jump-start your year with a week full of offers in the Starbucks
						app.*
					</p>
					<Button title="SignUp" />
					{/* <a
						className="rounded-full border-2 border-black py-2 px-4 hover:bg-green-200 text-center inline-block"
						href="#"
						target= _blank"
						rel="noopener noreferrer"
					>
						SignUp
					</a> */}
				</div>
			</div>
			<div className="flex-grow bg-orange-300 w-1/2">
				<div className="">
					<section>
						<img
							src={props.imageSrc}
							alt={props.text}
						/>
					</section>
				</div>
			</div>
			{/* {props.children} */}

      {/* {props.children[1]} */}
		</div>
	);
};

export default Wrapper;
