import React, { useState } from "react";
import { XIcon } from "@primer/octicons-react";
import Input from "./input.jsx";
import List from "./list.jsx";

const Home = () => {
	const [inputValue, setInputValue] = useState("")
	const [todos, setTodos] = useState([])

	return (
		<div className="container">
			<h1 className="text-center">todos</h1>
			<div className="row">
				<div className="border border-secondary p-2"> 
					<input 
					className="col-12 border-0" 
					onChange={(e) => setInputValue(e.target.value)}
					value={inputValue}
					onKeyPress={
						(e) => {
						if	(e.key === "Enter") {setTodos(todos.concat(([inputValue])));
							setInputValue("");
						}
					}}
					
					type="text" 
					placeholder="What needs to be done?"></input>
				</div>
				{todos.map ((item, index) => (
				<div className="border border-secondary p-2"> {item}<div className="final"
				onClick={
					() => 
				setTodos(
					todos.filter(
						(t, currentIndex) =>
							index != currentIndex
				))}>
					<XIcon size={24}/></div></div>
				))}
			</div>
			<p className="text-secondary">{todos.length} items left</p>
		</div>
	);
};

export default Home;
