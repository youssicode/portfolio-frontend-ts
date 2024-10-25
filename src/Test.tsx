import React, { useState, useEffect } from "react"

interface Props {
  title: string
}

export function TestHover({ title }: Props) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log(count)
  }, [count])

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={() => setCount((c) => c + 1)}>Count is {count}</button>
    </div>
  )
}
