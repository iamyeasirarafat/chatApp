import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Home() {
  const [data, setData] = useState()
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("/api/hello")
      console.log(res);
    }
    getData()
  }, [])
  return (
    <>

    </>
  )
}
