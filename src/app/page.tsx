'use client'

import ModalToCreate from "@/components/Modal/ModalToCreate";
import Table from "@/components/Table/Table"


const Home = () => {

    const headers = ["Nombre", "Cargo", "Empresa", "Ubicación", "Último Inicio de Sesión", "Color Favorito"]

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

    const openModal = () => {
        const modal = document.getElementById('my_modal_2') as HTMLDialogElement;
        if (modal) {
            modal.showModal();
        }
    };

    return (
        <div>
            <Table headers={headers} dataTable={dataTable} numberOfDataTable={numberOfDataTable} />
            {/* <FloatingButton onClick={openModal}>
                <IoIosAdd className="w-12 h-12" />
                <ModalToCreate idModal="my_modal_2"/>
            </FloatingButton> */}
        </div>
    )
}

export default Home