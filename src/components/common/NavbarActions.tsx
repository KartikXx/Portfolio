'use client';

import CommandPalette from '@/components/common/CommandPalette';
import { ThemeToggleButton } from '@/components/common/ThemeSwitch';
import React from 'react';

export default function NavbarActions() {
  return (
    <div className="flex items-center gap-2">
      <CommandPalette />
      <ThemeToggleButton variant="circle" start="top-right" blur />
    </div>
  );
}
