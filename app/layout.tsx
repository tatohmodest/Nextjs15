import '@/app/ui/global.css'
import { lusitana } from './ui/font';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
