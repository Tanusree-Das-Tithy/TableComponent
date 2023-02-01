/** @format */

import React from "react";

interface IconProps {
	onClick?: () => void;
	paint?: string;
}

export const DownIcon = ({ onClick, paint }: IconProps) => {
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
					fill={paint}
				/>
			</svg>
		</div>
	);
};

export default DownIcon;
