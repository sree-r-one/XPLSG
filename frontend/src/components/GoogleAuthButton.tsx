import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
// import { useAuth } from "../context/AuthContext";

const GoogleAuthButton: React.FC = () => {
  // ✅ Use the `useAuth` hook to access the `login` function
  // const { login } = useAuth();

  // ✅ Use the `useAuth` hook to access the `login` function
  const handleSuccess = async (credentialResponse: CredentialResponse) => {
    // Check if the credential is received
    if (!credentialResponse.credential) {
      console.error("Google authentication failed: No credential received");
      return;
    }

    // Log the credential response
    console.log("Google Login Success:", credentialResponse);
    console.log("Google Login Details", credentialResponse.credential);

    // Send the ID token to the backend
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
