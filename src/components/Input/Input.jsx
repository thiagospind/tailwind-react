const Input = props => {
  console.log(props)
  return(
    <input className="w-full max-width-lg rounded-full py-1 px-2 pl-5 dark:bg-dark-200 text-dark-200 dark:text-gray-200 outline-none" {...props} />
  )
}

export default Input