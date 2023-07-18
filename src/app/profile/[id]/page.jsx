"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import Profile from "@components/Profile";

const UserProfile = ({ params }) => {
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");
  const [userPosts, setUsersPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`/api/users/${params?.id}/posts`);
      const data = await res.json();
      setUsersPosts(data);
    };
    params?.id && fetchPosts();
  }, [params.id]);
  return <Profile name={userName} desc={`Welcome to ${userName}'s profile`} data={userPosts} />;
};

export default UserProfile;
