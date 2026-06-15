'use client';

import { spotifyConfig } from '@/config/Spotify';
import { Link } from 'next-view-transitions';
import React from 'react';

export default function SpotifyNowPlaying() {
  if (!spotifyConfig.enabled) return null;

  const { title, artist, url } = spotifyConfig.lastPlayed;

  return (
    <div className="mt-4 flex flex-col gap-3">
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary inline-flex w-fit items-center gap-2 text-sm transition-colors"
      >
        <span className="inline-block size-2 animate-pulse rounded-full bg-green-500" />
        <span>
          Last played —{' '}
          <span className="text-foreground font-medium">{title}</span>
          {' · '}
          {artist}
        </span>
      </Link>
      <iframe
        title="Spotify playlist"
        src={spotifyConfig.playlistEmbedUrl}
        width="100%"
        height="152"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="max-w-md rounded-xl border-0"
      />
    </div>
  );
}
