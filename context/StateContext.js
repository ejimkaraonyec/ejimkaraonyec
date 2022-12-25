import { createContext, useReducer } from 'react';

export const StateContext = createContext();

let initialState = {
	home: false,
};

export const stateReducer = (state, action) => {
	switch (action.type) {
		case 'IS_HOME':
			return { ...state, home: true };
		case 'NOT_HOME':
			return { ...state, home: false };
		default:
			return state;
	}
};

export const StateProvider = ({ children }) => {
	const [state, dispatch] = useReducer(stateReducer, initialState);

	return (
		<StateContext.Provider value={{ ...state, dispatch }}>
			{children}
		</StateContext.Provider>
	);
};
