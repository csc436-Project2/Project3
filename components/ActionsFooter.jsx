/** @format */

"use client";

import useUser from "csc-start/hooks/useUser";
import Link from "next/link";

const ActionsFooter = () => {
  const { user, loading } = useUser();
  if (loading) {
    return <p className='barge'>Loading</p>;
  }
  if (!user) {
    // user is not logged in
    return (
      <div className='flex justify-between mt-5 text-blue'>
        <Link className='hover:text-cloud-purple' href='/login'>
          Login
        </Link>
        <Link className='hover:text-cloud-purple' href='/register'>
          Register
        </Link>
      </div>
    );
  }
  // user is logged in
  return (
    <div className='flex justify-between text-blue'>
      <Link className='hover:text-cloud-purple' href='/profile'>
        Profile
      </Link>
      <Link className='hover:text-cloud-purple' href='/homepage'>
        Home
      </Link>
      <Link className='hover:text-cloud-purple' href='/logout'>
        Logout
      </Link>
    </div>
  );
};

export default ActionsFooter;
