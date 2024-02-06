import { RegisterForm } from '@/components/auth/register-form';
import { CardWrapper } from '@/components/auth/card-wrapper';

const RegisterPage = () => {
  return (
    <div className='flex justify-center'>
      <CardWrapper
        header='Sign Up'
        label='Create an account'
        backButtonLabel='Already have an account?'
        backButtonHref='/account/login'
        showSocial
      >
        <RegisterForm />
      </CardWrapper>
    </div>
  );
};
export default RegisterPage;
