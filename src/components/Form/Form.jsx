import Input from "../Input/Input"

const Form = ({ onSubmit }) => {
  const safeSubmit = event => {
    event.preventDefault()
    event.stopPropagation()
    const name = event.target[0].value
    const email = event.target[1].value
    onSubmit({ name, email})
  }
  // const styleInput = ""
  return (
    <form onSubmit={safeSubmit} className="flex flex-col items-center justify-center h-full -mt-20 mx-5 gap-10">
      <Input type="text" required placeholder="Insira seu nome" />
      <Input type="email" required placeholder="Insira seu email" />
      <button type="submit" 
        className="w-full max-width-sm py-1 px-5 bg-alura-100 dark:bg-dark-200 rounded-full
         text-gray-200 dark:text-gray-200 uppercase hover:animate-pulse hover:shadow-md hover
         hover:shadow-gray-500 hover:dark:shadow-black">Seguir</button>
    </form>
  )
}

export default Form