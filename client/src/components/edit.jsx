import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
	const {id} = useParams()
	const [name, setName] = useState()
	const navigate = useNavigate()

	useEffect(()=> {
		axios.get(`http://localhost:8000/api/${id}`)
			.then( res => {
				setName(res.data.name)
			})
			.catch( err => console.log(err))
	}, []);

	const updateAuthor = (e) => {
		e.preventDefault();
		axios.put(`http://localhost:8000/api/edit/${id}`, {
			name
		})
			.then( res => {
				console.log(res)
				navigate('/all')
			})
			.catch( err => console.log(err))
	}
	const handleName = (e) => {
		setName(e.target.value)
	}
		return(
			<div>
				<h1>Update Author</h1>
				<form onSubmit={updateAuthor}>
					<label>Author Name</label>
					<input type="text" value={name} onChange={handleName}/>
					<button type="submit" > update</button>
				</form>
			</div>
		)
}

export default Update;