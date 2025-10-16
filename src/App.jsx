import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Component/todo'
import { Provider } from 'react-redux'
import { store } from './Store/store'

function App() {
  const [count, setCount] = useState(0)

  return (

    <Provider store={store}>

      <Todo />
    </Provider>

  )
}

export default App
// import { Provider } from 'react-redux';
// import { store } from './Store/store';
// import Todo from './Component/todo';

// function App() {
//   return (
//     <Provider store={store}>
//       <Todo />
//     </Provider>
//   );
// }

// export default App;
