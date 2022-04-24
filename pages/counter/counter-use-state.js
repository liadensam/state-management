import { useState } from 'react'
import styles from '../../styles/Counter.module.css'

const Container = ({ children }) => (
	<div>
		{children}
	</div>
)

const AddOneButton = ({ setCounter }) => (
	<div className={styles.button}>
		<button onClick={() => setCounter((value) => value + 1)}>Add One</button>
	</div>
);

const Counter = ({ counter }) => (
	<div className={styles.counter}>Counter: {counter}</div>
)

export default function CounterUseState() {
  const [counter, setCounter] = useState(0)
  return (
	  <>
	  	<h1>Use State</h1>
		<div className={styles.wrapper}>
			<Container>
				<AddOneButton setCounter={setCounter} />
			</Container>
			<Counter counter={counter} />
		</div>
	  </>
		
  )
}