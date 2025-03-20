import "./ui/global.css";
import localFont from 'next/font/local';

const dancingScript = localFont({
  src: '../public/font/DancingScript-Bold.ttf',
  variable: '--font-dancingScript',
})
const xiaokai = localFont({
  src: '../public/font/slideyouran-Regular.ttf',
  variable: '--font-xiaokai',
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${xiaokai.variable} ${dancingScript.variable}`}>
      <body>{children}</body>
    </html>
  );
}
