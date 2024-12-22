import React from 'react';
import TableComponent from './components/Table/TableComponent';
import Paginate from './components/Paginate/PaginateComponent';
import usePaginatedTable from './components/hooks/usePaginatedTable';

const url = 'https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json';
const columnsTable = [
    { id: "s.no", label: "S.No" },
    { id: "percentage.funded", label: "Percentage Funded" },
    { id: "amt.pledged", label: "Amount Pledged" },
];
const itemsPerPageTable = 5;

const App = () => {
    const {rows, columns, page, itemsPerPage, selectPageHandler} = usePaginatedTable(url, columnsTable, itemsPerPageTable);
    
    return <div>
        {rows.length > 0 && <TableComponent columns={columns} rows={rows.slice(page * itemsPerPage - itemsPerPage, page * itemsPerPage)}/>}
        {rows.length > 0 && <Paginate page={page} data={rows} selectPageHandler={selectPageHandler} itemsPerPage={itemsPerPage} />}
    </div>
};

export default App;
