import React, { useEffect } from 'react';
import $ from 'jquery';
import 'datatables.net-bs5';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';

function DataTable({ headers, rows }) {
    useEffect(() => {
        const table = $('#booksTable').DataTable({
            destroy: true,
            select: true,
        });

        return () => {
            table.destroy();
        };
    }, [rows]);

    return (
        <table id="booksTable" className="table table-striped table-bordered">
            <thead>
                <tr>
                    {headers.map((header, idx) => (
                        <th key={idx}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((row, idx) => (
                    <tr key={idx}>
                        {row.map((cell, cIdx) => (
                            <td key={cIdx}>{cell}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default DataTable;
