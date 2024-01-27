import { RegisterForm } from '@/components/auth/RegisterForm';
import { CardWrapper } from '@/components/auth/card-wrapper';

const RegisterPage = () => {
  return (
    <div className='flex justify-center'>
      <CardWrapper
        headerLabel='Welcome back'
        backButtonLabel="Don't have an account?"
        backButtonHref='/account/register'
        showSocial
      >
        <RegisterForm />
      </CardWrapper>
    </div>
  );
};
export default RegisterPage;
