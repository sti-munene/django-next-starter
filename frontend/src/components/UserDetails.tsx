import { useSession } from "next-auth/react";
import React from "react";

export function UserDetails() {
  const { data: session, status } = useSession({ required: true });

  return (
    <div>
      <h4>{session?.user?.name}</h4>
      <h4>{session?.user?.email}</h4>
      <h4>{session?.user?.image}</h4>

      <h4>{session?.expires}</h4>
    </div>
  );
}
