import react from 'react'
import './App.scss'

// custom components
import AppBar from './components/AppBar/AppBar'
import BoardBar from './components/BoardBar/BoardBar'
import BoardContent from './components/BoardContent/BoardContent'
import Column from './components/Column/Column'

function App() {
  return (
    <div className="trello-tuantudev-master">
      <AppBar/>
      <BoardBar/>
      <BoardContent/>
      <Column/>
    </div >
  )
}

export default App;
