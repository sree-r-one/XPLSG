import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
import { useAuth } from "../context/AuthContext";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const GoogleAuthButton: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSuccess = async (credentialResponse: CredentialResponse) => {
    if (!credentialResponse.credential) {
      console.error("Google authentication failed: No credential received");
      return;
    }

    try {
      const {
        email,
        name = "Google User",
        picture,
      } = jwtDecode<{
        email: string;
        name?: string;
        picture?: string;
      }>(credentialResponse.credential);

      console.log("Google Login email", email);
      console.log("Google Login name", name);
      console.log("Google Login picture", picture);

      const googleIdToken = credentialResponse.credential;
      login(googleIdToken, { email, name, picture: picture || "" });

      // Redirect to the profile page
      navigate("/profile");
    } catch (error) {
      console.error("Failed to decode Google token:", error);
    }
  };

  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={() => console.error("Google Login Failed")}
    />
  );
};

export default GoogleAuthButton;
