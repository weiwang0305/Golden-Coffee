'use client';
import { useCurrentRole } from '@/hooks/use-current-role';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { RoleGate } from '@/components/auth/role-gate';
import { FormSuccess } from '@/components/form-success';
import { UserRole } from '@prisma/client';

const AdminPage = () => {
  return (
    <Card className='w-[600px]'>
      <CardHeader>
        <p className='text-2xl font-semibold text-center'>🔑 Admin</p>
      </CardHeader>
      <CardContent className='space-y-4'>
        <RoleGate allowedRole={UserRole.ADMIN}>
          <FormSuccess message='You are allowed to see this content' />
        </RoleGate>
      </CardContent>
    </Card>
  );
};
export default AdminPage;
