import { createContext, ReactNode, useState } from "react"

type CardContextProps = {
  children: ReactNode
}

type UserContextType = {
  name: string
  setName: (newState: string) => void

  stepOneVisible: boolean
  stepTwoVisible: boolean

  displayStep2: (newState: void) => void
}

export const CardContext = createContext<UserContextType>({} as UserContextType)

export const CardContextProvider = ({ children }: CardContextProps) => {
  const [name, setName] = useState("")

  const [visible, setVisible] = useState<"step1" | "step2">("step1")

  const displayStep2 = () => setVisible("step2")

  return (
    <CardContext.Provider
      value={{
        name,
        setName,

        displayStep2,

        stepOneVisible: visible === "step1",
        stepTwoVisible: visible === "step2"
      }}
    >
      {children}
    </CardContext.Provider>
  )
}
