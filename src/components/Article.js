import React, { useState } from 'react';
import profileIcon from '../assets/profile-icon.png';
import calendarIcon from '../assets/calendar-icon.png'; 
import ArticleModal from './ArticleModal';

const Article = ({ title, author, date, content, onDelete, isSelected }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const generateHashtags = (content) => {
        // Extract hashtags from the content
        const hashtags = content.match(/#\w+/g) || [];
        return hashtags.slice(0, 3);
    };

    const hashtags = generateHashtags(content);

    return (
        <div className="article-box">
            <div className="article-header">
                <label className="checkbox-container">
                    <input type="checkbox" checked={isSelected} />
                    <span className="checkmark"></span>
                </label>
                <div className="title-section">
                    <h2>{title}</h2>
                </div>
            </div>
            <div className="author-date-content-section">
                <div className="author-section">
                    <img src={profileIcon} alt="Profile Icon" className="profile-icon" />
                    <span className="author">{author}</span>
                </div>
                <div className="date-section">
                    <img src={calendarIcon} alt="Calendar Icon" className="calendar-icon" />
                    <span className="date">{date}</span>
                </div>
            </div>
            <div className="content-section">
                <p>{content.substring(0, 100)}...</p>
                <div className="hashtags">
                    {hashtags.map((tag, index) => (
                        <button key={index} className="hashtag-button">{tag}</button>
                    ))}
                </div>
            </div>
            <div className="actions">
                <span className="read-full-link" onClick={openModal}>Read Full</span>
                {modalOpen && (
                    <ArticleModal
                        title={title}
                        author={author}
                        date={date}
                        content={content}
                        closeModal={closeModal}
                        onDelete={() => onDelete(title)}
                    />
                )}
            </div>
        </div>
    );
};

export default Article;
