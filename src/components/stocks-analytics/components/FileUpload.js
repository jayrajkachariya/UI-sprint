import { useEffect, useRef, useState } from 'react'
import { csvToJson } from '../utils'
import classes from '../StocksAnalytics.module.css'

export default function FileUpload({ setData }) {
  const [fileName, setFileName] = useState('Upload CSV')
  const inputRef = useRef()

  useEffect(() => {
    inputRef.current.addEventListener('change', function changeFile() {
      const file = inputRef.current.files[0]
      const reader = new FileReader()
      setFileName(file.name)
      reader.addEventListener('load', function readFile(event) {
        let json = csvToJson(JSON.stringify(event.target.result))
        setData(json)
      })
      reader.readAsText(file)
    })
  }, [])

  return (
    <label htmlFor="file-upload" className={classes.customFileUpload}>
      <input
        id="file-upload"
        type="file"
        accept=".csv"
        ref={inputRef}
        className={classes.customFileInput}
      />
      {fileName}
    </label>
  )
}
