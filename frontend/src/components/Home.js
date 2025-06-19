import React, { useState, useEffect } from 'react';
import DataTable from './DataTable';
import CustomModal from './CustomModal'; // Make sure this path is correct

function Home() {
    debugger
    const [books, setBooks] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState(null);
    const getBooks = () => {
        fetch('http://localhost:5235/api/Book')
            .then((response) => response.json())
            .then(response => setBooks(response))
            .catch(error => console.error(error));
    }

    const handleUpdateClick = (book) => {
        setModalData(book); // Set book data to modal
        setShowModal(true);  // Show the modal
    };

    const handleModalClick = () => {
        // Handle the modal button click here (e.g., save changes)
        alert('Hi'); // Close the modal after handling
    }

    useEffect(() => {
        getBooks();
    }, []);


    const headers = ['Title', 'Author', 'Actions'];

    const rows = books.map(book => ([
        book.title,
        book.author,
        <button
            className="btn btn-sm btn-warning"
            onClick={() => handleUpdateClick(book)}
        >
            Update
        </button>
    ]));
    if (rows.length > 0) {
        return (
            <div className="container mt-4">
                <h2>Books List</h2>
                <DataTable headers={headers} rows={rows} />

                <CustomModal
                    show={showModal}
                    onClose={() => setShowModal(false)}
                    title="Edit Book"
                    onClick={handleModalClick}
                >
                    {modalData ? (
                        <div>
                            <p><strong>Title:</strong> {modalData.title}</p>
                            <p><strong>Author:</strong> {modalData.author}</p>
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}
                </CustomModal>
            </div>
        );
    }
}

export default Home;
