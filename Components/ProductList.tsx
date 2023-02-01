/** @format */

import React, { useState } from "react";
import Image from "next/image";
import DownIcon from "./Icons/DownIcon";
import UpIcon from "./Icons/UpIcon";
import ProductData, { HeadData } from "./ProductData";
const headStyle = "flex w-1/6 float-left mt-[16px] mb-[18px]";
const dataStyle = "w-1/6 float-left mt-[10px]";
const titleStyle = "w-2/6 float-left mt-[16px] mb-[18px] space-y-[2px]";

type OrderType = { DEF: string; ASC: string; DSC: string };
const Order: OrderType = { DEF: "DEF", ASC: "ASC", DSC: "DSC" };

export const ProductList = () => {
	const [data, setData] = useState(ProductData);
	const [order, setOrder] = useState(Order.DEF);

	const handleSortDsc = (col: string) => {
		if (order === Order.DSC || order === Order.DEF) {
			const sorted = [...data].sort((a, b) => (a[col] < b[col] ? 1 : -1));
			setData(sorted);
			setOrder("ASC");
		}
	};

	const handleSortAsc = col => {
		if (order === Order.ASC || order === Order.DEF) {
			const sorted = [...data].sort((a, b) => (a[col] > b[col] ? 1 : -1));
			setData(sorted);
			setOrder("DSC");
		}
	};
	const TableHead = () => {
		return (
			<thead className="font-semibold text-[13px]">
				<tr className="h-[50px] text-left">
					<th className={headStyle}></th>
					<th className={titleStyle}>Product name</th>
					{HeadData.map((val, key) => (
						<>
							<th
								className={headStyle}
								key={key}
							>
								<span className=" mr-1">{val.title}</span>
								<span className="mt-[2px] align-middle">
									<span className="block space-y-[1px] mt-[4px] align-middle">
										<UpIcon
											onClick={() => handleSortAsc(val.actions)}
											color={order === Order.DSC ? "#0000FF" : "#87CEEB"}
										/>
										<DownIcon
											onClick={() => handleSortDsc(val.actions)}
											paint={order === Order.ASC ? "#0000FF" : "#87CEEB"}
										/>
									</span>
								</span>
							</th>
						</>
					))}
				</tr>
			</thead>
		);
	};
	return (
		<div className="w-full px-20 overflow-hidden ">
			<table className=" w-full border-separate bg-white  border-0  rounded-xl">
				<TableHead />

				<tbody className="mb-10 font-bold text-[13px]">
					<tr>
						<td colSpan={3}>
							<hr className=" mx-[36px] border-[1px] border-hborder" />
						</td>
					</tr>

					{data.map((val, key) => (
						<>
							<tr
								key={key}
								className="text-left h-[83px] flex items-center justify-center"
							>
								<td className=" h-[83px]  w-1/6 float-left items-center">
									<div className="ml-[40px] mt-[16px] mb[18px] w-[49px] h-[49px] relative">
										<Image
											src={val.img}
											className=" overflow-hidden"
											alt=""
											// width={49}
											// height={49}
											fill={true}
											// layout="fill"
										/>
									</div>
								</td>
								<td className={titleStyle}>
									{val.title}
									<br></br>
									<div className="w-[55px] h-[22px] border-0 rounded-md text-sm font-bold px-1 text-blue bg-cyan">
										Melissa
									</div>
								</td>
								<td className={dataStyle}>{val.units}</td>
								<td className={dataStyle}>{val.orders}</td>
								<td className={dataStyle}>{val.sales}</td>
							</tr>
							<tr key={key - 1}>
								<td colSpan={3}>
									<hr className=" mx-[36px] border-[1px] border-bborder" />
								</td>
							</tr>
						</>
					))}
					<tr className="h-8"></tr>
				</tbody>
			</table>
		</div>
	);
};

export default ProductList;
