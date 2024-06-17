import FloatingLink from '@/components/FloatingLink/FloatingButton'
import Table from '@/components/Table/Table'
import React from 'react'
import { IoIosAdd } from 'react-icons/io'

const page = () => {

    const title = 'Socios'

    const headers = ["Código", "Nombre", "Apellido", "Fecha de ingresa", "Nro de DNI", "N° Tarjeta"]

    const dataTable = [
        {
            "code": "000001", // Código correlativo
            "name": "Cy ee",
            "lastName": "Ganderton",
            "dateOfAddmission": "12/16/2020",
            "dni": "12345678",
            "cardNumber": "011111"
        }
    ]

    const numberOfDataTable = 42


    return (
        <div>
            <Table headers={headers} dataTable={dataTable} numberOfDataTable={numberOfDataTable} />
            <FloatingLink route="/partners">
                <IoIosAdd className="w-12 h-12" />
            </FloatingLink>
        </div>
    )
}
    
export default page