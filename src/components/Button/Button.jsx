import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  const {title="Button Text here..."} = props;
	return (
		<a
			href="#"
			className="py-2 px-4 bg-purple-400 text-white rounded-full border-red-300 border"
		>
			{title}
		</a>
	);
};

Button.propTypes = {
	title: PropTypes.string.isRequired,
};

export default Button;
