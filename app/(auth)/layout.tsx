import '../globals.css';

import Link from 'next/link';

import { Logo, SettingsIcon, UsersIcon, VercelLogo } from '@/components/icons';
import { User } from '../../components/shared/user';
import { NavItem } from '../../components/shared/nav-item';

export const metadata = {
  title: 'Next.js App Router + NextAuth + Tailwind CSS',
  description:
    'A user admin dashboard configured with Next.js, Postgres, NextAuth, Tailwind CSS, TypeScript, and Prettier.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body>
        <div className=" min-h-screen w-full ">
      

            
            {children}

        </div>
      </body>
    </html>
  );
}
