import React, { useState } from 'react';
import Article from './Article';
import ArticleModal from './ArticleModal';
import MOCK_DATA from '../data/MOCK_DATA.json';
import '../styles/main.css';

const NewsApp = () => {
    const [articles, setArticles] = useState(MOCK_DATA);
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [selectAll, setSelectAll] = useState(false);

    const handleReadFullClick = (article) => {
        setSelectedArticle(article);
    };

    const closeModal = () => {
        setSelectedArticle(null);
    };

    const handleDelete = (title) => {
        const updatedArticles = articles.filter((article) => article.title !== title);
        setArticles(updatedArticles);
        setSelectedArticle(null); // Close the modal if open
    };

    const handleSelectAll = () => {
        setSelectAll((prevSelectAll) => !prevSelectAll);
    };

    return (
        <div className="container">
            <header className="header">
                <div className="left-section">
                    <h2>News Articles</h2>
                </div>
                <div className="right-section">
                    <input type="text" placeholder="Search.." />
                </div>
                <div className="actions">
                    <label className="checkbox-container">
                        <input type="checkbox" checked={selectAll} onChange={handleSelectAll} />
                        <span className="checkmark"></span>
                    </label>
                    <button className="publish-button">Publish</button>
                    <button className="delete-button">Delete</button>
                </div>
            </header>
            <div className="main-section">
                {articles.map((article) => (
                    <Article
                        key={article.id}
                        title={article.title}
                        author={article.author}
                        date={article.date}
                        content={article.content}
                        onDelete={() => handleDelete(article.title)}
                        isSelected={selectAll}
                        onReadFullClick={() => handleReadFullClick(article)}
                    />
                ))}
            </div>
            {selectedArticle && (
                <ArticleModal
                    title={selectedArticle.title}
                    author={selectedArticle.author}
                    date={selectedArticle.date}
                    content={selectedArticle.content}
                    closeModal={closeModal}
                    onDelete={() => handleDelete(selectedArticle.title)}
                />
            )}
        </div>
    );
};

export default NewsApp;
