'use client';
import { useCallback, useEffect, useState } from 'react';
import { createClient } from '@/app/lib/supabase/client';
import { type User } from '@supabase/supabase-js';
import Avatar from './avatar';
import Navbar from '../components/Common/Navbar';
import { useRouter } from 'next/navigation';

// ...

export default function AccountForm({ user }: { user: User | null }) {
  const supabase = createClient();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [fullname, setFullname] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [website, setWebsite] = useState<string | null>(null);
  const [avatar_url, setAvatarUrl] = useState<string | null>(null);

  const getProfile = useCallback(async () => {
    try {
      setLoading(true);

      const { data, error, status } = await supabase
        .from('profiles')
        .select(`full_name, username, website, avatar_url`)
        .eq('id', user?.id)
        .single();

      if (error && status !== 406) {
        console.log(error);
        throw error;
      }

      if (data) {
        setFullname(data.full_name);
        setUsername(data.username);
        setWebsite(data.website);
        setAvatarUrl(data.avatar_url);
      }
    } catch (error) {
      alert('Error loading user data:' + error);
    } finally {
      setLoading(false);
    }
  }, [user, supabase]);

  useEffect(() => {
    getProfile();
  }, [user, getProfile]);

  async function updateProfile({
    username,
    website,
    avatar_url,
  }: {
    username: string | null;
    fullname: string | null;
    website: string | null;
    avatar_url: string | null;
  }) {
    try {
      setLoading(true);

      const { error } = await supabase.from('profiles').upsert({
        id: user?.id as string,
        full_name: fullname,
        username,
        website,
        avatar_url,
        updated_at: new Date().toISOString(),
      });
      if (error) throw error;
      alert('Profile updated!');
    } catch (error) {
      alert('Error updating the data:' + error);
    } finally {
      setLoading(false);
    }
  }

  async function handleSignOut() {
    setLoading(true);
    await supabase.auth.signOut();
    router.push('/login');
  }

  return (
    <>
      <Navbar />
      <main className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md mt-8">
        {/* avatar section */}
        <div className="flex justify-center mb-6">
          <Avatar
            uid={user?.id as string}
            url={avatar_url}
            size={150}
            onUpload={(url) => {
              setAvatarUrl(url);
              updateProfile({ username, fullname, website, avatar_url: url });
            }}
          />
        </div>

        {/* form fields */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            updateProfile({ fullname, username, website, avatar_url });
          }}
          className="space-y-4"
        >
          <div className="grid grid-cols-1 gap-4">
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1 font-medium">
                Email
              </label>
              <input
                id="email"
                type="text"
                value={user?.email ?? ''}
                disabled
                className="border rounded px-3 py-2 bg-gray-100"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="fullName" className="mb-1 font-medium">
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                value={fullname || ''}
                onChange={(e) => setFullname(e.target.value)}
                className="border rounded px-3 py-2"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="username" className="mb-1 font-medium">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username || ''}
                onChange={(e) => setUsername(e.target.value)}
                className="border rounded px-3 py-2"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="website" className="mb-1 font-medium">
                Website
              </label>
              <input
                id="website"
                type="url"
                value={website || ''}
                onChange={(e) => setWebsite(e.target.value)}
                className="border rounded px-3 py-2"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
            <button
              type="submit"
              className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700 disabled:opacity-50"
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Update Profile'}
            </button>
            <button
              type="button"
              className="bg-red-500 text-white rounded px-4 py-2 hover:bg-red-600"
              onClick={handleSignOut}
            >
              Sign out
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
