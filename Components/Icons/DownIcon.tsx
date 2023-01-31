/** @format */

import React from "react";

export const DownIcon = ({ onClick }) => {
	return (
		<div>
			<svg
				width="8"
				height="6"
				viewBox="0 0 8 6"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				onClick={onClick}
			>
				<path
					d="M4 5.5L7.4641 0.625H0.535898L4 5.5Z"
					className="top"
					fill="#D9D9D9"
				/>
			</svg>
		</div>
	);
};

export default DownIcon;
