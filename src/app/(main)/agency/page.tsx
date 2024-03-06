import { currentUser } from '@clerk/nextjs';
import type { Plan } from '@prisma/client';
import { redirect } from 'next/navigation';

import AgencyDetails from '@/components/forms/agency-details';
import { getUserDetails, verifyAndAcceptInvitation } from '@/lib/queries';

const AgencyPage = async ({
  searchParams,
}: {
  searchParams: { plan: Plan; state: string; code: string };
}) => {
  const agencyId = await verifyAndAcceptInvitation();
  console.log('agencyId', agencyId);

  // get user details
  const user = await getUserDetails();

  if (agencyId) {
    if (user?.role === 'SUBACCOUNT_GUEST' || user?.role === 'SUBACCOUNT_USER') {
      return redirect('/subaccount');
    }
    if (user?.role === 'AGENCY_ADMIN' || user?.role === 'AGENCY_OWNER') {
      if (searchParams.plan) {
        return redirect(
          `/agency/${agencyId}/billing?plan=${searchParams.plan}`,
        );
      }
      if (searchParams.state) {
        const statePath = searchParams.state.split('__')[0];
        const stateAgencyId = searchParams.state.split('___')[1];
        if (!stateAgencyId) return <div>Not authorized</div>;
        return redirect(
          `/agency/${stateAgencyId}/${statePath}?code=${searchParams.code}`,
        );
      }
      redirect(`/agency/${agencyId}`);
    } else {
      return <div>Not authorized</div>;
    }
  }

  const authUser = await currentUser();
  return (
    <div className="mt-4 flex items-center justify-center">
      <div className="max-w-[850px] rounded-xl border-[1px] p-4">
        <h1 className="text-4xl">Create agency</h1>
        <AgencyDetails
          data={{ companyEmail: authUser?.emailAddresses[0]?.emailAddress }}
        />
      </div>
    </div>
  );
};

export default AgencyPage;
