"use client";

import { useEffect } from "react";
import { Button } from '@heroui/button';

export default function Error({
  error,
  reset,
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    /* eslint-disable no-console */
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <p className="italic text-danger">{error.message}</p>
      <Button
        variant="solid"
        color="danger"
        onPress={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
    </div>
  );
}
