'use client';

import { Card, CardContent, CardHeader, CardFooter } from '../ui/card';
import { Header } from './header';
import { Social } from './social';
import { BackButton } from './back-button';

interface CardWrapperProps {
  children: React.ReactNode;
  header: string;
  label: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export const CardWrapper = ({
  children,
  label,
  header,
  backButtonLabel,
  backButtonHref,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Card className='w-[400px] shadow-md'>
      <CardHeader>
        <Header label={label} header={header} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  );
};
