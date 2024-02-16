import { currentUser } from '@/lib/auth';
import { CartWrapper } from '@/components/cartWrapper';

const CheckoutPage = async () => {
  const user = await currentUser();
  return (
    <div>
      <CartWrapper user={user} />
    </div>
  );
};
export default CheckoutPage;
