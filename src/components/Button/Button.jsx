import React from 'react';

const Button = (props) => {
	return <button {...props} classname={'button ' + props.className} />;
};

export default Button;
