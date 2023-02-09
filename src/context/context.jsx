import { createContext } from "react"

export const userContext = createContext({ user :"anonymous"})

export function CartContextProvider(props) {
return(
        <userContext.Provider>
            {props.children}
        </userContext.Provider>
)
}

/*<userContext.Provider value={{us}}> */