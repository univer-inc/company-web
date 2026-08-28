import type { Metadata } from 'next';
import { comlabMetadata } from '@/data/comlabMetadata';

export const metadata: Metadata = comlabMetadata.u22;

export default function U22Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
