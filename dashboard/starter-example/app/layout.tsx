import "./ui/global.css";
import localFont from 'next/font/local';

export const dancingScript = localFont({
  src: '../public/font/DancingScript-Bold.ttf',
  variable: '--font-dancingScript',
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en"  className={
      dancingScript.variable
    }>
      <body>{children}</body>
    </html>
  );
}
