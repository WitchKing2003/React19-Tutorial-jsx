import './App.css'

function Welcome() {
  return <h2>Welcome, Chinh Nguyen!</h2>;
}

function Button() {
  return <button>Cleck me</button>
}

function App() {
  return (
    <>
      <div><h1>Code vui ver</h1></div>
      <Welcome />
      <Button />
    </>
  )
}

export default App
