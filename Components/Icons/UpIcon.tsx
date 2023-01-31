/** @format */

import React from "react";

export const UpIcon = ({ onClick }) => {
	return (
		<div>
			<svg
				width="8"
				height="5"
				viewBox="0 0 8 5"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				onClick={onClick}
			>
				<path
					d="M4 0L7.4641 4.875H0.535898L4 0Z"
					fill="#D9D9D9"
				/>
			</svg>
		</div>
	);
};

export default UpIcon;
