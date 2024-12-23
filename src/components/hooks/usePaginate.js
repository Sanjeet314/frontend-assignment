import { useState } from "react";

const usePaginate = ({data, itemsPerPage}) => {
    const [page, setPage] = useState(1); // by default we are on page 1

    const selectPageHandler = (selectedPage) => {
        const totalPages = Math.ceil(data.length / itemsPerPage);
        if (selectedPage >= 1 && selectedPage <= totalPages && selectedPage !== page) {
          setPage(selectedPage);
        }
    }
    return { page, selectPageHandler, itemsPerPage }
}

export default usePaginate;