import '../globals.css';

import Link from 'next/link';
import { Analytics } from '@vercel/analytics/react';
import { Logo, SettingsIcon, UsersIcon, VercelLogo } from '@/components/icons';
import { User } from '../../components/shared/user';
import { NavItem } from '../../components/shared/nav-item';
import Topbar from '@/components/shared/Topbar';
import Bottombar from '@/components/shared/Bottombar';

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
      <body dir='rtl'>
        <div className="grid min-h-screen w-full md:grid-cols-[142px_1fr] lg:grid-cols-[280px_1fr]">
          <div className="hidden border-r bg-gray-100/40 md:block lg:block dark:bg-gray-800/40">
            <div className="flex h-full max-h-screen flex-col gap-2">
              <div className="flex  z-30 h-[60px] items-center border-b px-5">
                <Link
                  className="flex items-center gap-2 font-semibold"
                  href="/"
                >
                  <div className="md:hidden">
                  <Logo />
                  </div>
                  <span className="">مسابقات قرآنية</span>
                </Link>
              </div>
              <div className="flex-1 overflow-auto py-2">
                <nav className="grid items-start px-4 text-sm font-medium">
                  <NavItem href="/">
                    <UsersIcon className="h-4 w-4 md:h-8 md:w-8" />
                    <p className='md:hidden'>
                    الطلاب
                    </p>
                  </NavItem>
                  <NavItem href="/settings">
                    <SettingsIcon className="h-4 w-4 md:h-8 md:w-8" />
                    <p className='md:hidden'>

                    الإعدادات
                    </p>
                  </NavItem>
                </nav>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <Topbar/>
            {children}
          </div>
        </div>
        <Bottombar/>
        <Analytics />
      </body>
    </html>
  );
}
