/** @format */
"use client";

import Link from "next/link";
const HomePage = () => {
  return (
    <Link
      className='hover:text-cloud-purple duration-300 transition-all'
      href='/todolist'
    >
      <button className='barge button small'>Create TODO LIST</button>
    </Link>
  );
};

export default HomePage;
