import { useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { GenericHead } from "@/components/GenericHead";

export default function Home() {
  const { data: session, status } = useSession({ required: true });
  const [response, setResponse] = useState("{}");

  const getUserDetails = async (useToken: boolean) => {
    try {
      const response = await axios({
        method: "get",
        url: process.env.NEXT_PUBLIC_BACKEND_URL + "auth/user/",
        headers: useToken
          ? { Authorization: "Bearer " + session?.access_token }
          : {},
      });
      setResponse(JSON.stringify(response.data));
    } catch (error: any) {
      setResponse(error.message);
    }
  };

  if (status == "loading") {
    return <div>Loading...</div>;
  }

  if (session) {
    return (
      <>
        <GenericHead title='Profile' />

        <main>
          <Container>
            <div className="mt-6">
              <div className="mb-6">
                <pre>{response}</pre>
              </div>

              <div className="flex items-center gap-4">
                <Button onClick={() => getUserDetails(true)}>
                  Get User Details (w/Token)
                </Button>

                <Button variant="ghost" onClick={() => getUserDetails(false)}>
                  Get User Details(wo/Token)
                </Button>
              </div>
            </div>
          </Container>
        </main>
      </>
    );
  }
}
