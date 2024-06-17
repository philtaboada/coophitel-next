
declare interface getUserInfoProps {
    userId: string
}

declare interface signInProps {
    email: string
    password: string
}

declare interface SignUpParams {
    email: string
    password: string
    name: string
}

declare interface tableProps {
    headers: any[]
    dataTable: any[]
    numberOfDataTable?: number
}

declare interface navbarProps {
    title?: string
}

declare interface sidebarProps {
    title?: string
}

declare interface floatingButtonProps {
    children: React.ReactNode
    route?: string
}

declare interface ModalToCreate{
    idModal: string
}

declare interface formPropsPartner {
    code: string
    registerDate: string
    name: string
    location: string
    lastname: string
    phone: string
}

// Codigo de tarjeta (ingresar)
// Fecha de registro
// Nombre
// Apellidos
// Direccion
// Fecha de nacimiento
// Departamento - Provincia - Distrito
// #DNI
// #Celular

// DATOS DE EMPRESA
// categoria
//     Obrero
//     Empleado
// estado
//     Activo
//     Liquidado
//     suspendido
// Aportación mínima
// Fecha de ingreso 
