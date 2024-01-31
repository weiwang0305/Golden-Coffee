import { NewPasswordForm } from '@/components/auth/new-password-form';
import { CardWrapper } from '@/components/auth/card-wrapper';

const ResetPassword = () => {
  return (
    <div className='flex justify-center'>
      <CardWrapper
        headerLabel='Enter a new password'
        backButtonLabel='Back to login'
        backButtonHref='/account/login'
      >
        <NewPasswordForm />
      </CardWrapper>
    </div>
  );
};
export default ResetPassword;
