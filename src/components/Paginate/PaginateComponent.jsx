/* eslint-disable react/prop-types */
import React from "react";
import './PaginateComponent.css'

const Paginate = ({page, data, selectPageHandler, itemsPerPage}) => {
    const totalPages = Math.ceil(data.length / itemsPerPage);
    return (
        <div className="pagination">
                <span className={page > 1 ? "" : "pagination_disable"} onClick={() => selectPageHandler(page - 1)}>◀️</span>
                {
                    [...Array(totalPages)].map((_, i) => {
                        return <span className={page === i+1 ? "pagination_selected" : ""} onClick={() => selectPageHandler(i+1)} key={i}>{i + 1}</span>
                    })
                }
                <span className={page < data.length/itemsPerPage ? "" : "pagination_disable"} onClick={() => selectPageHandler(page + 1)}>▶️</span>
        </div>
    )
}

export default Paginate;