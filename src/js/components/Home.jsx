import React, { useState } from "react";
import { use } from "react";




//create your first component
const Home = () => {
	//Esto es el estado
	const [activeLight, setActiveLight] = useState("")
	return (
		<div className="d-flex flex-column align-items-center bg-dark rounded-4 p-4 mx-auto mt-5" style={{ width: "120px" }}>
			{/* Luz roja */}
			<div className={`bg-danger rounded-circle mb-3 ${activeLight == "red" ? "opacity-50" : ""} `}
				style={{
					width: "70px", height: "70px", boxShadow:
						activeLight === "red"
							? "0 0 30px 10px rgba(220,53,69,0.9)"
							: "none",
					cursor: "pointer",
				}}
				onClick={() => { setActiveLight("red") }}
			></div>
			{/* Luz amarilla */}
			<div className={`bg-warning rounded-circle mb-3 ${activeLight == "yellow" ? "opacity-50" : ""} `}
				style={{
					width: "70px", height: "70px", boxShadow:
						activeLight === "yellow"
							? "0 0 30px 10px rgba(255,193,7,0.9)"
							: "none",
					cursor: "pointer",
				}}
				onClick={() => { setActiveLight("yellow") }}
			></div>
			{/* Luz verde															border border-light border-3, esto solo marca el borde sin tanto estilo, para mi aprendizaja*/}
			<div className={`bg-success rounded-circle mb-3 ${activeLight == "green" ? " opacity-50" : ""} `}
				style={{ width: "70px", height: "70px", boxShadow:
						activeLight === "green"
							? "0 0 30px 10px rgba(36, 255, 7, 0.9)"
							: "none",
					cursor: "pointer", }}
				onClick={() => { setActiveLight("green") }}
			></div>
		</div>
	);
};

export default Home;