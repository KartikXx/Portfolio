'use client';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

export interface Certificate {
  file?: string;
  title?: string;
  issuer?: string;
  date?: string;
  url?: string;
}

interface CertificatesGalleryProps {
  certificates: Certificate[];
  className?: string;
}

export default function CertificatesGallery({
  certificates,
  className,
}: CertificatesGalleryProps) {
  const [active, setActive] = useState<string | null>(null);

  if (certificates.length === 0) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center space-y-4 text-center">
        <h2 className="text-2xl font-semibold">No certificates found</h2>
        <p className="text-muted-foreground">
          Check back later for certificates and achievements!
        </p>
      </div>
    );
  }

  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    } catch {
      return dateString;
    }
  };

  const getCertKey = (cert: Certificate) =>
    cert.file || cert.url || cert.title || 'certificate';

  const activeCert = certificates.find((c) => getCertKey(c) === active);

  return (
    <>
      <div
        className={`grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 ${className}`}
      >
        {certificates.map((cert) => {
          const certKey = getCertKey(cert);

          return (
            <Card
              key={certKey}
              className="group h-full w-full cursor-pointer overflow-hidden border-gray-100 p-0 shadow-none transition-all dark:border-gray-800"
              onClick={() => {
                if (cert.file) {
                  setActive(certKey);
                  return;
                }
                if (cert.url) {
                  window.open(cert.url, '_blank', 'noopener,noreferrer');
                }
              }}
            >
              <CardHeader className="p-0">
                {cert.file ? (
                  <div className="group bg-muted/20 relative aspect-video overflow-hidden">
                    <Image
                      src={cert.file}
                      alt={cert.title || 'certificate'}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="from-primary/10 to-primary/5 flex aspect-video items-center justify-center bg-gradient-to-br px-6">
                    <div className="text-center">
                      <p className="text-primary text-sm font-semibold tracking-wide uppercase">
                        {cert.issuer || 'Certificate'}
                      </p>
                      {cert.url && (
                        <ExternalLink className="text-muted-foreground mx-auto mt-3 size-5" />
                      )}
                    </div>
                  </div>
                )}
              </CardHeader>

              <CardContent className="px-6">
                <div className="space-y-2">
                  <h3 className="group-hover:text-primary text-xl leading-tight font-semibold">
                    {cert.title || 'Certificate'}
                  </h3>
                  {cert.issuer && (
                    <p className="text-secondary text-sm">{cert.issuer}</p>
                  )}
                </div>
              </CardContent>

              {cert.date && (
                <CardFooter className="p-6 pt-0">
                  <time className="text-secondary text-sm" dateTime={cert.date}>
                    {formatDate(cert.date)}
                  </time>
                </CardFooter>
              )}
            </Card>
          );
        })}
      </div>

      <Dialog
        open={!!active}
        onOpenChange={(open) => {
          if (!open) setActive(null);
        }}
      >
        <DialogContent className="bg-background/95 max-h-[90vh] w-full max-w-[90vw] border-0 p-0 backdrop-blur-sm">
          {active && activeCert?.file && (
            <>
              <DialogTitle className="sr-only">
                {activeCert.title || 'Certificate'}
              </DialogTitle>
              <div className="flex h-60 items-center justify-center p-4 md:h-92">
                <div className="relative h-full w-full rounded-lg">
                  <Image
                    src={activeCert.file}
                    alt={activeCert.title || 'certificate'}
                    fill
                    className="rounded-lg object-contain"
                  />
                </div>
              </div>
              <div className="border-t px-6 pt-2 pb-6">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold">
                    {activeCert.title || 'Certificate'}
                  </h3>
                  {activeCert.issuer && (
                    <p className="text-muted-foreground text-sm">
                      {activeCert.issuer}
                    </p>
                  )}
                  {activeCert.date && (
                    <time
                      className="text-muted-foreground text-xs"
                      dateTime={activeCert.date}
                    >
                      {formatDate(activeCert.date)}
                    </time>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
