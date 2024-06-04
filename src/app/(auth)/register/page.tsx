'use client'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { SignUp } from '@/actions/user.actions'
import { useRouter } from 'next/navigation'

const Register = () => {
    const route = useRouter()
    const { register, handleSubmit } = useForm<signInProps>()
    const onSubmit : SubmitHandler<signInProps> =async (data: any) => {
        try {
            const { password, repassword, name, email } = data

            if(password !== repassword) {
                toast.error('Las contraseñas no coinciden')
                return
            }

            if(await SignUp({ password, name, email }) === 'ok') {
                route.push('/home')
                toast.success('Registro exitoso')
            } else{
                toast.error('Error al registrarse')
            }


        } catch (error) {
            console.log(error)
        }
    }


  return (
    <div>
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold w-full text-gray-900 dark:text-white">
          <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
          Flowbite    
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="w-96 p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Crear una cuenta
              </h1>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Escribe Tu nombre</label>
                      <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Juan Valdez" {...register('name')} />
                  </div>
                  <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Escribe Tu email</label>
                      <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" {...register('email')} />
                  </div>
                  <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Escribe Tu password</label>
                      <input type="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register('password')} />
                  </div>
                  <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirma Tu password</label>
                      <input type="password" id="repassword" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register('repassword')} />
                  </div>
                  <button type="submit" className="w-full text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray">
                      Tienes una cuenta <a href="#" className="font-medium text-primary hover:underline dark:text-primary">Registrate</a>
                  </p>
              </form>
          </div>
          <ToastContainer />
      </div>
    </div>
  )
}

export default Register