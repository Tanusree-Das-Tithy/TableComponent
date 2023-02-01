/** @format */

import React from "react";
import { QuestionData } from "./ProductData";

export const Questions = () => {
	return (
		<div className="w-full px-20  overflow-hidden">
			<table className=" w-full bg-white border-separate   rounded-lg">
				<thead className="font-semibold text-[13px]">
					<tr className="h-[50px] text-left">
						<th className="ml-[45px] float-left mt-[16px]">Viewer Related Question</th>
						<th className="w-1/6 float-left mt-2"></th>
					</tr>
				</thead>

				<tbody className="mb-10 font-bold text-[13px] space-y-[14px]">
					<tr className="mx-[36px] ">
						<td colSpan={2}>
							<hr className=" mx-8 border border-hborder" />
						</td>
					</tr>

					{QuestionData.map((val, key) => (
						<tr
							key={key}
							className="text-left "
						>
							<td className="ml-[45px] w-1/2 float-left mt-3">{val.ques}</td>
							<td className="w-1/6 float-right mt-3">{val.ans}</td>
						</tr>
					))}
					<tr className="h-8"></tr>
				</tbody>
			</table>
		</div>
	);
};

export default Questions;
