import { useEffect, useState } from "react";
import usePaginate from "./usePaginate";

const usePaginatedTable = (url, columns, itemsPerPage) => {

    const [rows, setRows] = useState([]);
    const {page, selectPageHandler} = usePaginate({data: rows, itemsPerPage});


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



    return {rows, columns, page, itemsPerPage, selectPageHandler}
}

export default usePaginatedTable;