import React from "react";
import { XIcon } from "@primer/octicons-react";

const List = (props) => {
	const todos=props.todos;
	const setTodos=props.setTodos;
	return (
		<>
		{todos.map ((item, index) => (
			<div className="border border-secondary p-2 show"> {item}<div className="final hide"
			onClick={
				() => 
			setTodos(
				todos.filter(
					(t, currentIndex) =>
						index != currentIndex
			))}>
				<XIcon size={24}/></div></div>
			))}
		
		</>
	);
};

export default List;