import React , {useState, useEffect}from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CreateAuthor = () => {
	const [name , setName] = useState('')
	const [errors, setErrors] = useState([]);
	
	
	const handleName = (e) => {
		setName(e.target.value)
	}

	const onSubmitHandler = (e) => {
		e.preventDefault();
		axios.post('http://localhost:8000/api/', {
			name,
		})
			.then((res)=>{
				console.log('Success', res)
			})
			.catch((err) => {
				console.log('ERROR!', err.response);
				setErrors(err.response.data.errors)
				})
	}
	return(
		<div onSubmit={onSubmitHandler}>
			<Link to={"/all"}>All Authors</Link>
			<form>
			{errors &&
				Object.keys(errors).map((errKey, index) => {
					return(<p style={{color: "red"}} key= {index}>{errors[errKey].message}</p>)
			})}
				<label>Author's Name</label>
				<input type="text" onChange={handleName}></input>
				<button type="submit">Submit</button>
			</form>
		</div>
	)

}


export default CreateAuthor