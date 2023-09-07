import React from 'react';
import Footer from '@/components/footer';


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.Fragment>
      <div className="flex flex-col w-full min-h-screen max-w-full mx-auto">
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Layout;
