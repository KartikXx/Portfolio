'use client';

import { useThemeToggle } from '@/components/common/ThemeSwitch';
import { Button } from '@/components/ui/button';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from '@/components/ui/command';
import { commandPaletteConfig } from '@/config/CommandPalette';
import { spotifyConfig } from '@/config/Spotify';
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react';
import { toast } from 'sonner';

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { toggleTheme } = useThemeToggle({
    variant: 'circle',
    start: 'top-right',
  });

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === 'k' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setOpen((value) => !value);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  const runCommand = useCallback(
    (command: (typeof commandPaletteConfig.commands)[number]) => {
      setOpen(false);

      if (command.href) {
        router.push(command.href);
        return;
      }

      switch (command.action) {
        case 'toggle-theme':
          toggleTheme();
          break;
        case 'scroll-top':
          window.scrollTo({ top: 0, behavior: 'smooth' });
          break;
        case 'copy-email':
          navigator.clipboard
            .writeText(commandPaletteConfig.email)
            .then(() => toast.success('Email copied to clipboard'));
          break;
        case 'open-github':
          window.open(
            commandPaletteConfig.github,
            '_blank',
            'noopener,noreferrer',
          );
          break;
        case 'open-spotify':
          if (spotifyConfig.enabled) {
            window.open(
              spotifyConfig.lastPlayed.url,
              '_blank',
              'noopener,noreferrer',
            );
          }
          break;
        default:
          break;
      }
    },
    [router, toggleTheme],
  );

  const groups = ['Navigate', 'Actions', 'Connect'] as const;

  return (
    <>
      <Button
        type="button"
        variant="outline"
        size="sm"
        className="text-muted-foreground hidden h-9 gap-2 px-3 md:inline-flex"
        onClick={() => setOpen(true)}
        aria-label="Open command palette (Ctrl+K)"
      >
        <Search className="size-4" />
        <span className="text-sm">Search</span>
        <kbd className="bg-muted text-muted-foreground pointer-events-none hidden rounded border px-1.5 py-0.5 font-mono text-[10px] font-medium lg:inline-block">
          Ctrl+K
        </kbd>
      </Button>
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="size-10 md:hidden"
        onClick={() => setOpen(true)}
        aria-label="Open command palette (Ctrl+K)"
      >
        <Search className="size-4" />
      </Button>

      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        title={commandPaletteConfig.title}
        description="Search pages and actions"
      >
        <CommandInput placeholder={commandPaletteConfig.placeholder} />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {groups.map((group) => (
            <CommandGroup key={group} heading={group}>
              {commandPaletteConfig.commands
                .filter((command) => command.group === group)
                .map((command) => (
                  <CommandItem
                    key={command.id}
                    value={`${command.label} ${command.description ?? ''}`}
                    onSelect={() => runCommand(command)}
                  >
                    <div className="flex flex-col">
                      <span>{command.label}</span>
                      {command.description && (
                        <span className="text-muted-foreground text-xs">
                          {command.description}
                        </span>
                      )}
                    </div>
                    {command.shortcut && (
                      <CommandShortcut>{command.shortcut}</CommandShortcut>
                    )}
                  </CommandItem>
                ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
}
