import { useState } from 'react'
import { cars } from './assets/carsAPI'
import './App.css'
import Cars from './components/Cars'
import Button from './components/button'
import Card from './components/Card'
import { filterCars } from './utils/filterCars'
function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const visibleCars = filterCars(cars, searchTerm)

  return (
    <main className='App-container'>
     <div className='catalog-controls'>
      <label htmlFor='category-search'>Search categories</label>
      <input id='category-search' type='search' value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)} />
      <p role='status' aria-live='polite'>Showing {visibleCars.length} categories</p>
     </div>
     <section className='category-list' aria-label='Vehicle categories'>
     {
      visibleCars.map(car=>{
        return(
          <Card key={car.id} cars={car}>
          <Cars cars={car}/>
          <Button car={car}/>
          </Card>
        )
      })
     }
      {visibleCars.length === 0 && <p role='status'>No categories match “{searchTerm}”.</p>}
     </section>
    </main>
  )
}
export default App
