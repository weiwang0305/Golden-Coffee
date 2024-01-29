import { RegisterForm } from '@/components/auth/RegisterForm';
import { CardWrapper } from '@/components/auth/card-wrapper';

const RegisterPage = () => {
  return (
    <div className='flex justify-center'>
      <CardWrapper
        headerLabel='Create an account'
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
