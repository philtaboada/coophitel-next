'use client'
import { getLoggedIn, login } from '@/actions/user.actions'
import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Login = () => {
    const router = useRouter()
    const { register, handleSubmit } = useForm<signInProps>()

    useEffect(() => {
        if (!getLoggedIn()) {
            redirect('/home');
        }
    }, []);

    const onSubmit: SubmitHandler<signInProps> = async (data) => {
        try {
            if (await login(data) === 'ok') {
                router.push('/home');
            } else {
                toast.error('Error al iniciar sesión');
            }
        } catch (error) {
            toast.error('Error al iniciar sesión');
            console.error('Error:', error);
        }
    };

    return (
        <section>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto w-full md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-12 h-12 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                    Coopithel
                </a>
                <div className="rounded-lg w-full shadow dark:border md:mt-0 xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="w-96 p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Iniciar sesión
                        </h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo electrónico</label>
                                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" {...register('email')} />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                                <input type="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register('password')} />
                            </div>
                            <div className="flex items-center justify-between">
                                <a href="#" className="text-sm font-medium text-primary hover:underline dark:text-primary">¿Olvidaste tu contraseña?</a>
                            </div>
                            <button type="submit" className="w-full text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                No tienes una cuenta <a href="#" className="font-medium text-primary hover:underline dark:text-primary">Registrate</a>
                            </p>
                        </form>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </section>
    )
}

export default Login