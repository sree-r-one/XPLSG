import { GoogleLogin, CredentialResponse } from "@react-oauth/google";

const GoogleAuthButton: React.FC = () => {
  const handleSuccess = async (credentialResponse: CredentialResponse) => {
    if (!credentialResponse.credential) {
      console.error("Google authentication failed: No credential received");
      return;
    }

    console.log("Google Login Success:", credentialResponse);

    try {
      const res = await fetch("http://localhost:4000/auth/google-auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: credentialResponse.credential }), // ✅ Send ID token to backend
      });

      const data = await res.json();
      console.log("Backend Response:", data);
      localStorage.setItem("token", data.token); // ✅ Store JWT token
    } catch (error) {
      console.error("Google Auth Error:", error);
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
