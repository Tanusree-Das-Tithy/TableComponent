/** @format */

import React from "react";
import DownIcon from "./Icons/DownIcon";
import UpIcon from "./Icons/UpIcon";
import ProductData from "./ProductData";
const headStyle = "w-1/6 float-left mt-2";
const dataStyle = "w-1/6 float-left mt-3";
const titleStyle = "w-2/6 float-left mt-2";
export const ProductList = () => {
	return (
		<div className="w-full px-20">
			<table className=" w-full rounded-full border-2 border-cyan-200 ">
				<thead>
					<tr className="h-10 text-left">
						<th className={headStyle}></th>
						<th className={titleStyle}>Product name</th>
						<th className={headStyle}>
							Units sold &nbsp;
							<button>
								<UpIcon />
								<DownIcon />
							</button>
						</th>

						<th className={headStyle}>Orders</th>
						<th className={headStyle}>Sales</th>
					</tr>
				</thead>

				<tbody className="mb-10">
					<tr className="mx-10 ">
						<td colSpan={3}>
							<hr className=" mx-8 border border-cyan-200" />
						</td>
					</tr>

					{ProductData.map((val, key) => (
						<tr
							key={key}
							className="text-left "
						>
							<td className=" px-8 w-1/6 mt-1 mb-1 float-left ">
								<img
									src={val.img}
									className="h-12 w-12 object-center object-cover"
									alt=""
								/>
							</td>
							<td className={titleStyle}>
								{val.title}
								<br></br>
								<button className="text-sm font-bold px-1 text-blue-500 bg-cyan-100">
									Melissa
								</button>
							</td>
							<td className={dataStyle}>{val.units}</td>
							<td className={dataStyle}>{val.orders}</td>
							<td className={dataStyle}>{val.sales}</td>
						</tr>
					))}
					<tr className="h-8"></tr>
				</tbody>
			</table>
		</div>
	);
};

export default ProductList;
