'use client'
import { useForm } from 'react-hook-form';

const Create = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<formPropsPartner>();

    const onSubmit = (data: formPropsPartner) => {
        // Aquí puedes manejar el envío del formulario, por ejemplo, enviarlo a un servidor
        console.log('Datos del nuevo socio:', data);
    };


    return (
        <div className="container mx-auto p-4">
            <div className="card shadow-lg bg-white p-6">
                <h2 className="text-2xl font-bold mb-4">Añadir Nuevo Socio</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className='form-control'>
                            <label className="label">
                                <span className="label-text">Código de tarjeta</span>
                            </label>
                            <input
                                type="number"
                                {...register("code", { 
                                    required: "El codigo de tarjeta es obligatorio",
                                    pattern: {
                                        value: /^[0-9]{6}$/,
                                        message: "El código de tarjeta debe tener 6 dígitos"
                                    }
                                })}
                                className="input input-bordered"
                            />
                            {errors.code && <span className="text-red-500">{errors.code.message}</span>}
                        </div>
                        <div className='form-control'>
                            <label className="label">
                                <span className="label-text">Fecha de registro</span>
                            </label>
                            <input
                                type="date"
                                {...register("registerDate", { required: "El día de registro es obligatorio" })}
                                className="input input-bordered"
                            />
                            {errors.registerDate && <span className="text-red-500">{errors.registerDate.message}</span>}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Nombre</span>
                            </label>
                            <input
                                type="text"
                                {...register("name", { required: "El nombre es obligatorio" })}
                                className="input input-bordered"
                            />
                            {errors.name && <span className="text-red-500">{errors.name.message}</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Apellidos</span>
                            </label>
                            <input
                                type="text"
                                {...register("lastname", { required: "Los apellidos son obligatorios" })}
                                className="input input-bordered"
                            />
                            {errors.lastname && <span className="text-red-500">{errors.lastname.message}</span>}
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Dirección</span>
                        </label>
                        <input
                            type="text"
                            {...register("location", { required: "La dirección es obligatoria" })}
                            className="input input-bordered"
                        />
                        {errors.location && <span className="text-red-500">{errors.location.message}</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Teléfono</span>
                        </label>
                        <input
                            type="tel"
                            {...register("phone", { required: "El teléfono es obligatorio" })}
                            className="input input-bordered"
                        />
                        {errors.phone && <span className="text-red-500">{errors.phone.message}</span>}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4">Datos de la empresa</h3>


                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">Añadir Socio</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Create