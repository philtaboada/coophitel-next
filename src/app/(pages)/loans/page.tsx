import Table from '@/components/Table/Table'
import React from 'react'

const page = () => {

    const title = 'Préstamos'

    const headers = [ "Nombre", "Cargo", "Empresa", "Ubicación", "Último Inicio de Sesión", "Color Favorito" ]

    const dataTable = [
        {
            "name": "Cy ee",
            "job": "Quality Control Specialist",
            "company": "Littel, Schaden and Vandervort",
            "location": "Canada",
            "lastLogin": "12/16/2020",
            "favoriteColor": "Blue"
        },
        {
            "name": "Hart Hagerty",
            "job": "Desktop Support Technician",
            "company": "Zemlak, Daniel and Leannon",
            "location": "United States",
            "lastLogin": "12/5/2020",
            "favoriteColor": "Purple"
        },
        {
            "name": "Cy ee",
            "job": "Quality Control Specialist",
            "company": "Littel, Schaden and Vandervort",
            "location": "Canada",
            "lastLogin": "12/16/2020",
            "favoriteColor": "Blue"
        },
        {
            "name": "Hart Hagerty",
            "job": "Desktop Support Technician",
            "company": "Zemlak, Daniel and Leannon",
            "location": "United States",
            "lastLogin": "12/5/2020",
            "favoriteColor": "Purple"
        }
    ]

    const numberOfDataTable = 42

  return (
    <div>
        <Table headers={headers} dataTable={dataTable} numberOfDataTable={numberOfDataTable} />
    </div>
  )
}

export default page