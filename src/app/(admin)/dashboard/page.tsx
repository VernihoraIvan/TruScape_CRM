'use client';

import React, { Children, useEffect } from 'react';
import Header from '@/app/components/header';

export interface LayoutProps {
  //   children: React.ReactNode;
}

export default function Page({}: LayoutProps) {
  return (
    <>
      <Header>Dashboard</Header>
      {/* {children} */}
    </>
  );
}
