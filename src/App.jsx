import './App.css'
import Card from './components/Card'
import data from '../public/data'

function App() {
  return (
    <div>
      <div className="container">
        <h1>Users</h1>
        <div className="ota">
          {data.map((odam,i)=>{
            return <Card key={i} ism={odam.name} kasb={odam.position}></Card>
          })}
          
        </div>
      </div>
    </div>
  )
}

export default App
