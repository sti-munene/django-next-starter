import { Container } from "@/components/Container";
import { GenericHead } from "@/components/GenericHead";
import { SignInDrawer } from "@/components/SignInDrawer";
import { UserDetails } from "@/components/UserDetails";
import { Button } from "@/components/ui/button";
import { signIn, useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession({ required: false });

  return (
    <>
      <GenericHead />

      <main className="w-full">
        <Container>
          <div
            style={{
              height: "calc(100vh - 72px)",
            }}
            className="flex items-center justify-center"
          >
            <div>
              {session && (
                <>
                  <h4 className="text-xl">Hello, {session?.user?.username}</h4>
                </>
              )}
              <h4 className="text-3xl">Django | Next JS | Auth JS Demo</h4>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
