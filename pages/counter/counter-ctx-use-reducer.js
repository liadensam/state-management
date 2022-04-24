import { useReducer, createContext, useContext } from 'react'
import styles from '../../styles/Counter.module.css'

const reducer = (state, action) => {
    switch (action.type) {
        case "add":
            return state + 1;
        case "subtract":
            return state - 1;
        default:
            return state;
    }
};

const CounterContext = createContext(null);

const CounterContextProvider = ({ children }) => (
    <CounterContext.Provider value={useReducer(reducer, 0)}>
        {children}
    </CounterContext.Provider>
) 

const Container = () => (
	<div>
		<AddOneButton />
        <SubtractOneButton />
	</div>
)

const AddOneButton = () => {
    const [, dispatch] = useContext(CounterContext);
    return (
        <div className={styles.button}>
            <button onClick={() => dispatch({
                type: "add"
            })}>Add One</button>
        </div>
    )
};

const SubtractOneButton = () => {
    const [, dispatch] = useContext(CounterContext);
    return (
        <div className={styles.button}>
            <button onClick={() => dispatch({
                type: "subtract"
            })}>Subtract One</button>
        </div>
    )
};

const Counter = () => {
    const [counter] = useContext(CounterContext);
    return (
        <div className={styles.counter}>Counter: {counter}</div>
    )
}

function CounterUseState() {
  return (
      <div className={styles.wrapper}>
		<CounterContextProvider>
            
			<Container />
			<Counter />
		</CounterContextProvider>
      </div>
  )
}

export default function CounterUseStatePage() {
    return (
        <div>
            <h1>Context Use Reducer</h1>
            <CounterUseState />
            <CounterUseState />
            <CounterUseState />
        </div>
    )
}