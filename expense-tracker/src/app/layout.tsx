import './globals.css';
import { Providers } from './providers';

export const metadata = {
  title: 'Expense Tracker',
  description: 'Track your spending easily with Chakra UI + Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}