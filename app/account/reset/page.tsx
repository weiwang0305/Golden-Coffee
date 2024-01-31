import { ResetForm } from '@/components/auth/reset-form';
import { CardWrapper } from '@/components/auth/card-wrapper';

const ResetPage = () => {
  return (
    <div className='flex justify-center'>
      <CardWrapper
        headerLabel='Forgot your password?'
        backButtonLabel='Back to login'
        backButtonHref='/account/login'
      >
        <ResetForm />
      </CardWrapper>
    </div>
  );
};
export default ResetPage;
