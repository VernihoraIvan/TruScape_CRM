import Header from '@/app/components/header';
import MagicButton from '@/app/components/magic-button';
import React from 'react';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <main>
      <Header>Companies Page</Header>
    </main>
  );
}
