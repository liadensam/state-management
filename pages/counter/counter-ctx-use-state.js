import { useState, createContext, useContext } from 'react'
import styles from '../../styles/Counter.module.css'

const CounterContext = createContext(null);

const CounterContextProvider = ({ children }) => (
    <CounterContext.Provider value={useState(0)}>
        {children}
    </CounterContext.Provider>
) 

const Container = () => (
	<div>
		<AddOneButton />
	</div>
)

const AddOneButton = () => {
    const [, setCounter] = useContext(CounterContext);
    return (
        <div className={styles.button}>
            <button onClick={() => setCounter((value) => value + 1)}>Add One</button>
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
            <h1>Context Use State</h1>
            <CounterUseState />
            <CounterUseState />
            <CounterUseState />
        </div>
    )
}