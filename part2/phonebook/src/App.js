import React, {useEffect, useState} from 'react';
import './App.css';
import Search from "./Search";
import Form from "./Form";
import axios from 'axios'

const App = () => {
    const [persons, setPersons] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3001/persons")
            .then(response => setPersons(response.data))
    }, []);
    return (
        <div>
            <h2>Phone book</h2>
            <Form persons={persons} setPersons={setPersons}/>
            <Search phonebook={persons}/>
        </div>
    )
};

export default App;
/*

        {name: 'Arto Hellas', number: '040-123456'},
        {name: 'Ada Lovelace', number: '39-44-5323523'},
        {name: 'Dan Abramov', number: '12-43-234345'},
        {name: 'Mary Poppendieck', number: '39-23-6423122'}
 */