import axios from "axios"

function App() {
 axios.get("/api/jokes")
 .then((response)=>{
console.log(response)
 })
 .catch((error)=>{
  console.log(error);
 })

  return (
    <>
     <h1>this is the first front-end with backend project </h1>
    </>
  )
}

export default App
