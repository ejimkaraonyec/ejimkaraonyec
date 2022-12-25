import { StateContext } from "../context/StateContext";
import { useContext } from "react";

export const useStateContext = () => {
    const context = useContext(StateContext)

    if (!context) {
        throw Error('useStateContext must be used inside a StateProvider')
    }

    return context
}