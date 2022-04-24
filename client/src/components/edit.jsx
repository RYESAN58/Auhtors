import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
	const {id} = useParams()
	const [name, setName] = useState('')
	const [errors, setErrors] = useState([]);
	const navigate = useNavigate()

	useEffect(()=> {
		axios
			.get(`http://localhost:8000/api/${id}`)
			.then( (res) => {
				console.log(res.data)
				setName(res.data.name)
			})
			.catch((err) => {
				console.log(err)
				navigate("/error")
		});
}, [id]);

	const updateAuthor = (e) => {
		e.preventDefault();
		axios
			.put(`http://localhost:8000/api/edit/${id}`, {
				name,
		})
			.then( (res) => {
				console.log(res.data)
				// if errors setErrors to res.data.message else navigate to all
				if (res.data.errors){
					setErrors(errors.message)
				}else{
					navigate('/all')
				}
			})
			.catch((err) => {
				console.log('ERROR!', err);
			})
	}
	const handleName = (e) => {
		console.log(name)
		setName(e.target.value)
	}
		return(
			<div>
				<h1>Update Author</h1>
				<form onSubmit={updateAuthor}>
				{errors &&
				Object.keys(errors).map((errKey, index) => {
					return(<p style={{color: "red"}} key= {index}>{errors[errKey].message}</p>)
			})}
					<label>Author Name</label>
					<input type="text" value={name} onChange={handleName}/>
					<button type="submit" > update</button>
				</form>
			</div>
		)
}

export default Update;