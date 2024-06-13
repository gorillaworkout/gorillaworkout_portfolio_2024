// src/components/LoadingWrapper.tsx
"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Loader from './Loader';

const LoadingWrapper = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      setLoading(true);
    };

    const handleRouteComplete = () => {
      setLoading(false);
    };

    router.events.on('routeChangeStart', handleRouteChange);
    router.events.on('routeChangeComplete', handleRouteComplete);
    router.events.on('routeChangeError', handleRouteComplete);

    // Set loading to false once the component mounts
    setLoading(false);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
      router.events.off('routeChangeComplete', handleRouteComplete);
      router.events.off('routeChangeError', handleRouteComplete);
    };
  }, [router]);

  return (
    <>
      {loading && <Loader />}
      {children}
    </>
  );
};

export default LoadingWrapper;
