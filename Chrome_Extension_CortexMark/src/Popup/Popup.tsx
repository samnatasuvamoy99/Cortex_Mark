
import { useState, useEffect } from "react";
import { Button } from "../Components/Button";
import { CreateContent } from "../Components/BookmarkCard";
import axios from "axios";
import { BACKEND_URL } from "../Config";

export function Popup() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

 
  useEffect(() => {
    if (typeof chrome !== "undefined" && chrome.storage?.local) {
      chrome.storage.local.get(["token"], (result) => {
        if (result.token) setLoggedIn(true);
      });
    } else {
      const token = localStorage.getItem("token");
      if (token) setLoggedIn(true);
    }
  }, []);

  // Login function
  const handleLogin = async () => {
    if (!email || !password) return alert("Enter email and password!");

    try {
      setLoading(true);

      const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, {
        email,
        password,
      });

      const token = response.data.token;
      if (!token) return alert("Login failed!");

      // Store token safely
      if (typeof chrome !== "undefined" && chrome.storage?.local) {
        chrome.storage.local.set({ token }, () => {
          setLoggedIn(true);
          alert("Login successful!");
        });
      } else {
        localStorage.setItem("token", token);
        setLoggedIn(true);
        alert("Login successful!");
      }

      setEmail("");
      setPassword("");
    } catch (err: any) {
      console.error("Login error:", err);
      alert(err.response?.data?.message || "Login failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-lg w-[300px] flex flex-col items-center">
      {!loggedIn ? (
        // Login Form
        <div className="flex flex-col gap-2 w-full">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 rounded"
          />
          <Button
            text={loading ? "Logging in..." : "Login"}
            variant="primary"
            styleType="primarystyle"
            fullwidth={true}
            onClick={handleLogin}
            disabled={loading}
          />
        </div>
      ) : (
        <>
          {/* Small Add Content Button */}
          {!showCard && (
            <Button
              text="Add Content"
              variant="primary"
              styleType="primarystyle"
              fullwidth={true}
              onClick={() => setShowCard(true)}
            />
          )}

          {/* Full CreateContent Card */}
          {showCard && <CreateContent onClose={() => setShowCard(false)} />}
        </>
      )}
    </div>
  );
}


