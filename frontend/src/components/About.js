import React, { useContext }  from 'react';
import { UserContext } from '../App'; 

function About() {
 const { user } = useContext(UserContext);


    return (
        <p>{user.email.value}</p>
    );
}

export default About