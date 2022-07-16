import { createContext, useReducer } from "react"
import { BoardReducer, INITIAL_BOARD } from "./BoardReducer";



export const BoardContext = createContext();

export const BoardContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(BoardReducer, INITIAL_BOARD);

    return (
        <BoardContext.Provider
            value={{
                board: state.board,
                player: state.player,
                dispatch
            }}
        >
            {children}
        </BoardContext.Provider>
    )
}