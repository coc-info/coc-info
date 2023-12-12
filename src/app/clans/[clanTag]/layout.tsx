import { ClanInfoNavigation } from './_components/ClanInfoNavigation';

interface LayoutProps {
  children: React.ReactNode;
}
export default function layout({ children }: LayoutProps) {
  return (
    <>
      <ClanInfoNavigation />
      {children}
    </>
  );
}
