import React from 'react'
import ReactDOM from 'react-dom'
import MainRouter from './pages/Login'
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import reportWebVitals from './reportWebVitals'
import './index.scss'

ReactDOM.render(
  <DndProvider backend={HTML5Backend}>
    <MainRouter />
  </DndProvider>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
