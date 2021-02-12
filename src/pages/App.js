import React, {useRef} from 'react'
import {Button} from 'antd'
import {useDrop} from 'react-dnd'
import './style/app.scss'

function App() {
  const ref = useRef()
  console.log('ref', ref)
  console.log('Button', Button)
  const [,drag] = useDrop({
    accept: '',
    hover(type, monitor) {
      // TODO
    },
  })
  return (
    <div className="app">
      <Button type='primary'>HELLO</Button>
    </div>
  )
}

export default App
