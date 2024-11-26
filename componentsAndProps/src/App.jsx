import {Line1, Line2} from "./components/Square"
//to call what your export more than one components in the same file

function App() {

  return (
    <>
      <div className="flex justify-center w-full max-w-[576px] flex-wrap">
        <Line1></Line1>
        <Line2></Line2>
        <Line1></Line1>
      </div>
    </>
  )
}

export default App
