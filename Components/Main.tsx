/** @format */

import React from "react";
import { QuestionData } from "./ProductData";
import ProductList from "./ProductList";
import Questions from "./Questions";
export const Main = () => {
	return (
		<div className="block space-y-5 font-primary">
			<ProductList />

			<Questions />
		</div>
	);
};

export default Main;
