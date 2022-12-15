import React, { useState } from "react";
import Input from "./input.jsx";
import List from "./list.jsx";

const Home = () => {
	const [inputValue, setInputValue] = useState("")
	const [todos, setTodos] = useState([])

	return (
		<div className="container">
			<h1 className="text-center mainTitle">todos</h1>
			<div className="row">
				<div className="border border-secondary p-2"> 
					<Input inputValue= {inputValue} setInputValue={setInputValue} todos={todos} setTodos={setTodos}/>
					<List todos={todos} setTodos={setTodos}/>
				</div>
			<p className="text-secondary">{todos.length} items left</p>
			</div>
		</div>
	);
};

export default Home;
