import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return(
    <div>
      <h1>Whoops! looks like we dropped the ball there !</h1>
      <p>We cannot find the author you're looking for would you like to add an author ?</p>
      <Link to={'/'}>Add New Author</Link>
    </div>
  )
}

export default Error;