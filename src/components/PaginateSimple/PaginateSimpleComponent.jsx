/* eslint-disable react/prop-types */
import React from "react";
import './PaginateSimpleComponent.css';


const PaginateSimpleComponent = ({ page, data, selectPageHandler, itemsPerPage }) => {
    const totalPages = Math.ceil(data.length / itemsPerPage);

    return (
        <div className="pagination">
            <button
                className={`pagination_button ${page === 1 ? "pagination_disable" : "pagination_active"}`}
                onClick={() => page > 1 && selectPageHandler(page - 1)}
                disabled={page === 1}
            >
                Previous
            </button>
            <span className="pagination_info">
                Page {page} of {totalPages}
            </span>
            <button
                className={`pagination_button ${page === totalPages ? "pagination_disable" : "pagination_active"}`}
                onClick={() => page < totalPages && selectPageHandler(page + 1)}
                disabled={page === totalPages}
            >
                Next
            </button>
        </div>
    );
};

export default PaginateSimpleComponent;