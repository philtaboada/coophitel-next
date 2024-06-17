'use client'

import { useState } from "react"

const Table = ({ headers, dataTable, numberOfDataTable }: tableProps) => {

    const [numberOfPage, setNumberOfPage] = useState(0);

    const dataTableKeys = Object.keys(dataTable[0])

    const dataTableLength = dataTable.length

    const pagination = []
    if (numberOfDataTable) {
        if (numberOfDataTable > 30) {
            for (let i = 0; i < numberOfDataTable; i += 30) {
                pagination.push(i)
            }
        }
    }

    const actualPage = numberOfPage + 1;

    return (
        <div className="w-full">
            <table className="table table-lg table-pin-rows table-pin-cols">
                <thead>
                    <tr>
                        <th></th>
                        {
                            headers.map((header, index) => (
                                <th key={index}>{header}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {dataTable.map((item, index) => (
                        <tr key={index}>
                            <th>{index + 1}</th>
                            {dataTableKeys.map((header, index) => (
                                <td key={index}>{item[header]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="w-full flex justify-center">
            <div className="join">
            {
                dataTableLength > 30 ? (
                    pagination.map((item, index) => (
                        <button
                            onClick={() => {
                                const page = (item / 30);
                                setNumberOfPage(page);
                            }}
                            key={index}
                            className={`join-item btn btn-md ${numberOfPage === item / 30 ? 'btn-active' : ''}`}
                        >
                            {item / 30 + 1} {/* Mostrar el número de página empezando desde 1 */}
                        </button>
                    ))
                ) : (
                    <button className="join-item btn btn-md btn-active">1</button>
                )
            }
            <div className="flex justify-center items-center p-2">
                {numberOfPage * 30 + 1} - {(numberOfPage + 1) * 30} de {numberOfDataTable}
            </div>
        </div>
            </div>
        </div>
    )
}

export default Table