import React, { useState } from "react";
import { use } from "react";




//create your first component
const Home = () => {
	const [activeLight, setActiveLight] = useState("")
	return (
		<div className="d-flex flex-column align-items-center bg-dark rounded-4 p-4 mx-auto mt-5" style={{ width: "120px" }}>
			{/* Luz roja */}
			<div className={`bg-danger rounded-circle mb-3 ${activeLight == "red" ?  "border border-light border-3" : ""} `}   
				style={{ width: "70px", height: "70px" }}
				onClick={() => {setActiveLight("red") }}
				></div>
			{/* Luz amarilla */}
			<div className={`bg-warning rounded-circle mb-3 ${activeLight == "yellow" ? " border border-light border-3" : ""} `}
				style={{ width: "70px", height: "70px" }}
				onClick={() => {setActiveLight("yellow")}}
				></div>
			{/* Luz verde */}
			<div className={`bg-success rounded-circle mb-3 ${activeLight == "green" ? " border border-light border-3" : ""} `}
				style={{ width: "70px", height: "70px" }}
				onClick={() => {setActiveLight("green")}}
				></div>
		</div>
	);
};

export default Home;