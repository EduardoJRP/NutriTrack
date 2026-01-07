'use client';

import { useState } from 'react';
import { useRouter }  from 'next/navigation';
import { supabase } from '../../lib/supabaseClient';

export default function AuthForm() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) alert(error.message)
    else {
      router.push("/");
    }
  };

  const signUp = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) alert(error.message);
  };

  return (
    <div className="max-w-sm space-y-4">
      <input
        className="w-full border p-2"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="w-full border p-2"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={signIn} className="w-full bg-black text-white p-2">
        Sign In
      </button>

      <button onClick={signUp} className="w-full border p-2">
        Sign Up
      </button>
    </div>
  );
}
