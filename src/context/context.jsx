import { createContext } from "react"

export const UserContext = createContext({ user :"anonymous"})
export const pepito = "hola";

export function CartContextProvider(props) {
return(
        <UserContext.Provider>
            {props.children}
        </UserContext.Provider>
)
}

/*<userContext.Provider value={{us}}> */