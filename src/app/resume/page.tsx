import Container from '@/components/common/Container';
import { Separator } from '@/components/ui/separator';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { resumeConfig } from '@/config/Resume';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  ...getMetadata('/resume'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function ResumePage() {
  return (
    <Container className="py-16">
      <div className="space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Resume
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            View and download my professional resume.
          </p>
        </div>
        <Separator />
        <div className="mx-auto flex max-w-2xl justify-center">
          <a
            href="https://drive.google.com/file/d/1_I1kofmzEPt-cfCd1lUJEp7gbmN2lQyW/view"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary text-sm font-medium underline underline-offset-4"
          >
            Open resume in Google Drive
          </a>
        </div>
        <div className="mx-auto max-w-4xl">
          <iframe
            src={resumeConfig.url}
            className="min-h-[80vh] w-full rounded-lg border"
            title="Kartik Rajput Resume"
          ></iframe>
        </div>
      </div>
    </Container>
  );
}
