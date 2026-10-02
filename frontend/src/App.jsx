import { useEffect, useState } from 'react'

function App() {
  const [status, setStatus] = useState('서버 확인 중...')

  useEffect(() => {
    fetch('/api/health')
      .then((res) => res.text())
      .then((text) => setStatus(text))
      .catch(() => setStatus('서버에 연결할 수 없어요'))
  }, [])

  return (
    <main>
      <h1>한걸음</h1>
      <p>{status}</p>
    </main>
  )
}

export default App