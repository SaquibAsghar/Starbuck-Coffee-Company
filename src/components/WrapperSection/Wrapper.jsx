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
					<a
						className="rounded-full border-2 border-black py-2 px-4 hover:bg-green-200 text-center inline-block"
						href="#"
						target="_blank"
						rel="noopener noreferrer"
					>
						SignUp
					</a>
				</div>
			</div>
			<div className="flex-grow bg-orange-300 w-1/2">
				<div className="">
					<section>
						<img
							src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-88178.jpg"
							alt="Hand holding a phone with a Cafe Latte and Bacon Gouda sandwich."
						/>
					</section>
				</div>
			</div>
			{/* {props.children[0]}

      {props.children[1]} */}
		</div>
	);
};

export default Wrapper;
