import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body suppressHydrationWarning={true} >
        <nav>
          <h1>global Nav bar</h1>
        </nav>
        {children}
      </body>
    </html>
  )
}
