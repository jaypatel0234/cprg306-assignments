// page.js or pages/index.js (whichever is your entry component in week8)
"use client";
import React from 'react';
import { useUserAuth } from './_utils/auth-context';
import Layout from './layout'; // adjust the path if necessary
import Link from 'next/link';


const Page = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  // Function to handle sign-in
  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Error signing in with GitHub: ", error);
    }
  };

  // Function to handle sign-out
  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <Layout>
    <h1>The Shopping List</h1>
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.displayName} ({user.email})</p>
          <button onClick={handleSignOut}>Logout\n</button>
          {/* Link to the shopping list page */}
          <Link href="/week8/shopping-list">Go to Shopping List</Link>
        </div>
      ) : (
        <button onClick={handleSignIn}>Login with GitHub</button>
      )}
    </div> 
  </Layout>
  );
};

export default Page;
