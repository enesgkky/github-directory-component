import { useState } from "react"

function App() {

  const [value, setValue] = useState("");
  const [files, setFiles] = useState(["main"])

  const keyHandle = (e) => {

    if(e.key === "/" || e.key === "Enter"){
      if(value !== ""){
        e.preventDefault()
        setFiles([...files, value])
        setValue("")
      }
    }
    if (e.key === "Backspace" && !value) {
      e.preventDefault()
      setValue(files.slice(-1))
      setFiles([...files.slice(0,-1)])
    }
  }

  return (
    <>
      <div
        className="h-screen bg-black text-white px-8"
      >
        <nav
          className="border-b-2 border-sky-500/50 h-36 flex items-center gap-2 cursor-default"
        >
          {
            files.map((file, index) => {
              return (
                <>
                  <div className="text-blue-400 hover:underline" key={index}>{file}</div>
                  <div
                    className="text-white/60"
                  >
                    /
                  </div>
                </>
              )
            })
          }
          <input
            className="bg-transparent outline-none border border-blue-500 rounded-md px-2 py-1"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={keyHandle}
          />
          <button className="ml-auto bg-blue-700 p-3 rounded-md disabled:opacity-50" disabled={!value}>Commit Changes</button>
        </nav>
        <pre>
          {JSON.stringify(files,null,3)}
        </pre>
      </div>
    </>
  )
}

export default App
