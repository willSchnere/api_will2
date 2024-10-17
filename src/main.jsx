import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HelloWorld from './HelloWorld.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
    <HelloWorld/>,
)
