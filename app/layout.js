
import Nav from './(components)/Nav'
import './globals.css'



export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body className='bg-gray-100'>
        <Nav />
        {children}
      </body>
    </html>
  )
}
