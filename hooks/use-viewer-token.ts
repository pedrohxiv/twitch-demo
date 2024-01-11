import { jwtDecode, type JwtPayload } from "jwt-decode";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import { createViewerToken } from "@/actions/token";

export const useViewerToken = (hostIdentity: string) => {
  const [token, setToken] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [identity, setIdentity] = useState<string>("");

  useEffect(() => {
    const createToken = async () => {
      try {
        const viewerToken = await createViewerToken(hostIdentity);

        setToken(viewerToken);

        const decodedToken = jwtDecode(viewerToken) as JwtPayload & {
          name?: string;
        };

        const identity = decodedToken.jti;
        const name = decodedToken?.name;

        if (identity) {
          setIdentity(identity);
        }

        if (name) {
          setName(name);
        }
      } catch (error) {
        console.error(error);
        toast.error("Something went wrong");
      }
    };

    createToken();
  }, [hostIdentity]);

  return {
    token,
    name,
    identity,
  };
};
