import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


const AllAuthors = () => {
	const navigate= useNavigate()
	const [authors, setAuthors] = useState([])

	const deleteAuthor = (personId) => {
		axios.delete(`http://localhost:8000/api/${personId}`)
			.then(res => {
				setAuthors(authors.filter(author => author._id != personId))
			})
			.catch(err => console.log(err))
	}
	useEffect(() => {
		axios
			.get('http://localhost:8000/api')
			.then((response) => {
				console.log(response)
				setAuthors(response.data)

			})
			.catch((err) => console.log(err.response));
}, []);
	return (
		<div>
			<Link to={'/'}>Add an Author</Link>
			<h1>Authors!</h1>
			<table>
				<tr>
					<th>Author</th>
					<th>Actions available</th>
				</tr>
				{authors.map((author, index) => {
					return(
							<tr key={index}>
								<td>
									{author.name}
								</td>
								<td>
									<Link to={`/edit/${author._id}`}>Update</Link>
									<button onClick={(e) => {deleteAuthor(author._id)}}>delete</button>
								</td>
							</tr>
					)
				})}
			</table>
		</div>
	)
}

export default AllAuthors;