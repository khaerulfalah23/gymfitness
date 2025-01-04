'use client';

import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';

export default function GoogleSignInButton() {
  return (
    <Button className='w-full' variant='outline' type='button'>
      <Icons.google className='mr-2 h-4 w-4' />
      Continue with Google
    </Button>
  );
}
