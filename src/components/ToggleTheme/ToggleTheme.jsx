import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"
import { useEffect } from "react"

const ToggleTheme = () => {
  const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches
  const pageClasses = document.documentElement.classList

  // (&&) O shortbreak serve para indicar que a porção de código à sua direita só será 
  //executado se o conteúdo à sua esquerda for true — no caso, o systemPreference. 
  // Ou seja, o código será executado somente se o sistema operacional estiver configurado 
  // em modo escuro.
  useEffect(() => {
    systemPreference && pageClasses.add('dark')
  })
  const toggle = () => {
    document.documentElement.classList.toggle('dark')
  }
  return (
    <div >
      <MoonIcon className="h-8 text-gray-100 block dark:hidden cursor-pointer" onClick={toggle}/>
      <SunIcon className="h-8 text-gray-100 hidden dark:block cursor-pointer" onClick={toggle}/>
    </div>
  )
}

export default ToggleTheme