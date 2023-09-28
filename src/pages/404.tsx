import { FC } from 'react';
import Link from 'next/link';

import { StaticPageRouteEnum } from '@/utils/routes';

const NotFound: FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1 style={{ color: '#333', margin: '16px 0', textAlign: 'center' }}>
        Whoops, that page is gone.
      </h1>
      <p style={{ color: 'grey', textAlign: 'center', margin: '50px 0' }}>
        404
      </p>
      <Link
        href={StaticPageRouteEnum.SIGN_IN_PAGE}
        style={{ maxWidth: '300px', color: '#fff', textAlign: 'center' }}
      >
        Back to sign in
      </Link>
    </div>
  );
};

export default NotFound;
