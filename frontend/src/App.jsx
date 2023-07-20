
import QRCode from 'qrcode.react'
import {Outlet} from 'react-router-dom'

function App() {
  const textoQrcode = 'Anderson alves'

  return (
    <>
      <h1>Gerador de QrCode</h1>
      <Outlet/>
      <QRCode value={textoQrcode}/>
    </>
  )
}

export default App
