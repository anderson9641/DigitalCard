
import QRCode from 'qrcode.react'

function App() {
  const textoQrcode = 'Anderson alves'

  return (
    <>
      <h1>Gerador de QrCode</h1>
      <QRCode value={textoQrcode}/>
    </>
  )
}

export default App
