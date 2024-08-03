import React, { useState, useEffect } from "react";
import { Header, Footer } from "./header";
import Note from "./Note";
import axios from 'axios';

function Home() {
    const [contents, setContents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/')
            .then((response) => {
                // Assuming the response.data is an array of objects
                setContents(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <Header />
            <div className='primary-container'>
                {contents.map((note) => (
                    <Note
                        key={note._id} // Assuming MongoDB generates _id for each note
                        title={note.Heading}
                        content={note.Desc}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default Home;
