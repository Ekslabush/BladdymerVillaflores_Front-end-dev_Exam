import React from 'react';

const ArticleModal = ({ title, author, date, content, closeModal, onDelete }) => {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <span className="modal-close" onClick={closeModal}>&times;</span>
                <h2>{title}</h2>
                <p>Author: {author}</p>
                <p>Date: {date}</p>
                <div className="content-box">
                    <p>{content}</p>
                </div>
                <div className="modal-buttons">
                    <button className="publish-button">Publish</button>
                    <button className="delete-button" onClick={onDelete}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ArticleModal;
