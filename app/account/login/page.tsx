import { LoginForm } from '@/components/auth/login-form';
import { CardWrapper } from '@/components/auth/card-wrapper';

const LoginPage = () => {
  return (
    <div className='flex justify-center'>
      <CardWrapper
        header='Sign In'
        label='Welcome back'
        backButtonLabel="Don't have an account?"
        backButtonHref='/account/register'
        showSocial
      >
        <LoginForm />
      </CardWrapper>
    </div>
  );
};
export default LoginPage;
