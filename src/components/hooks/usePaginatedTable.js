import { useEffect, useState } from "react";

const usePaginatedTable = (url, columns, itemsPerPage) => {

    const [rows, setRows] = useState([]);
    const [page, setPage] = useState(1); // by default we are on page 1

    const fetchData = async () => {
        const res = await fetch(url);
        const data = await res.json();

        if(data) {
            setRows(data);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    const selectPageHandler = (selectedPage) => {
        const totalPages = Math.ceil(rows.length / itemsPerPage);
        if (selectedPage >= 1 && selectedPage <= totalPages && selectedPage !== page) {
          setPage(selectedPage);
        }
    }

    return {rows, columns, page, itemsPerPage, selectPageHandler}
}

export default usePaginatedTable;