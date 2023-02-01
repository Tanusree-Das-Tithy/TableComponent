/** @format */

import React, { useState } from "react";
interface IconProps {
	onClick?: () => void;
	color?: string;
}
export const UpIcon = ({ onClick, color }: IconProps) => {
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
					fill={color}
				/>
			</svg>
		</div>
	);
};

export default UpIcon;
