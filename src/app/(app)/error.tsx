"use client"; 

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { PageWrapper } from '@/components/layout/PageWrapper';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <PageWrapper className="flex flex-col items-center justify-center min-h-[calc(100vh-theme(spacing.16))]"> {/* Adjust min-h if header height changes */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-destructive mb-4">Something went wrong!</h1>
        <p className="text-lg text-muted-foreground mb-6">
          We encountered an unexpected issue. Please try again.
        </p>
        {error?.message && (
          <p className="text-sm text-muted-foreground bg-secondary p-3 rounded-md mb-6">
            Error details: {error.message}
          </p>
        )}
        <Button
          onClick={() => reset()}
          variant="cta"
          size="lg"
        >
          Try Again
        </Button>
      </div>
    </PageWrapper>
  );
}
