import React, { useState, useRef } from 'react';
import './HomePage.css';
import {
  FaPencilRuler,
  FaCode,
  FaServer,
  FaBrain,
  FaTools,
  FaRocket,
} from 'react-icons/fa';
import ToolCard from '../components/ToolCard';
import sampleTools from '../data/sampleTools';

const categories = [
  { name: 'All', icon: null },
  { name: 'Design', icon: <FaPencilRuler className="icon" /> },
  { name: 'Development', icon: <FaCode className="icon" /> },
  { name: 'Backend', icon: <FaServer className="icon" /> },
  { name: 'AI', icon: <FaBrain className="icon" /> },
  { name: 'Productivity', icon: <FaTools className="icon" /> },
  { name: 'Deployment', icon: <FaRocket className="icon" /> },
];

const ITEMS_PER_PAGE = 8;

function HomePage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const categoryRef = useRef(null);

  const filteredTools = (activeCategory === 'All'
    ? sampleTools
    : sampleTools.filter((tool) => tool.tags.includes(activeCategory))
  )
    .filter((tool) =>
      tool.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const totalPages = Math.ceil(filteredTools.length / ITEMS_PER_PAGE);
  const paginatedTools = filteredTools.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleCategoryClick = (name) => {
    setActiveCategory(name);
    setCurrentPage(1);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    categoryRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="homepage">
      {/* 🌟 Hero Section */}
      <header className="hero">
        <h1 className="main-heading">TechStack</h1>
        <p className="sub-heading">
          Your go-to platform to discover the best engineering tools & resources online.
        </p>
      </header>

      {/* 🔍 Search */}
      <div className="search-bar-wrapper">
        <input
          type="text"
          placeholder="🔎 Search for a tool..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-bar"
        />
      </div>

      {/* 🧭 Categories */}
      <section className="category-section" ref={categoryRef}>
        <h2 className="section-title">Explore by Category</h2>
        <div className="category-grid">
          {categories.map(({ name, icon }) => (
            <div
              key={name}
              className={`category-card ${activeCategory === name ? 'active' : ''}`}
              onClick={() => handleCategoryClick(name)}
            >
              {icon} {name}
            </div>
          ))}
        </div>
      </section>

      {/* 🧰 Tools */}
      <section className="tools-section">
        <h2 className="section-title">
          {activeCategory === 'All' ? 'Popular Tools' : `${activeCategory} Tools`}
        </h2>

        <div className="tools-grid">
          {paginatedTools.length > 0 ? (
            paginatedTools.map((tool, index) => (
              <ToolCard
                key={index}
                logo={tool.logo}
                name={tool.name}
                description={tool.description}
                tags={tool.tags}
                link={tool.link}
              />
            ))
          ) : (
            <p className="no-tools">😔 No tools found for this search.</p>
          )}
        </div>

        {/* 🔢 Pagination */}
        {totalPages > 1 && (
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                className={`page-btn ${currentPage === i + 1 ? 'active' : ''}`}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default HomePage;