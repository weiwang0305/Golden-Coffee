import { CardWrapper } from './card-wrapper';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';

export const ErrorCard = () => {
  return (
    <CardWrapper
      label='Oops! Something went wrong!'
      header='Error'
      backButtonHref='/account/login'
      backButtonLabel='Back to login'
    >
      <div className='w-full flex justify-center'>
        <ExclamationTriangleIcon className='text-destructive' />
      </div>
    </CardWrapper>
  );
};
