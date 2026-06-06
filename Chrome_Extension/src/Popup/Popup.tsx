
import { useState, useEffect } from "react";
import { Button } from "../Components/Button";
import { CreateContent } from "../Components/BookmarkCard";
import { Logo } from "../Icon/Logo";
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

  const handleLogout = () => {
    if (typeof chrome !== "undefined" && chrome.storage?.local) {
      chrome.storage.local.remove(["token"], () => {
        setLoggedIn(false);
      });
    } else {
      localStorage.removeItem("token");
      setLoggedIn(false);
    }
  };

  return (
    <div className="bg-slate-50 p-4 rounded-xl shadow-lg w-[300px] flex flex-col border border-slate-200">
      {!loggedIn ? (
        <div className="flex flex-col w-full">
          {/* Header */}
          <div className="flex items-center gap-2 justify-center mb-4 text-purple-600">
            <Logo />
            <span className="text-xl font-bold tracking-tight text-slate-800">CortexMark</span>
          </div>
          
          <p className="text-xs text-slate-500 text-center mb-4">
            Sign in to start saving bookmarks and notes.
          </p>

          <div className="flex flex-col w-full">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-3 py-1.5 w-full bg-white border border-gray-300 rounded-md text-xs text-gray-900 placeholder:text-gray-400 hover:border-purple-400 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-200 transition-all duration-150 mb-2.5"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-3 py-1.5 w-full bg-white border border-gray-300 rounded-md text-xs text-gray-900 placeholder:text-gray-400 hover:border-purple-400 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-200 transition-all duration-150 mb-4.5"
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
        </div>
      ) : (
        <div className="flex flex-col w-full">
          {!showCard ? (
            <div className="flex flex-col w-full items-center text-center">
              {/* Header */}
              <div className="flex items-center gap-2 justify-center mb-4 text-purple-600">
                <Logo />
                <span className="text-xl font-bold tracking-tight text-slate-800">CortexMark</span>
              </div>
              
              <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-3 w-full mb-4">
                <p className="text-xs text-emerald-700 font-medium">
                  Signed in successfully!
                </p>
                <p className="text-[10px] text-emerald-600 mt-0.5">
                  Click below to bookmark the current page.
                </p>
              </div>

              <div className="flex flex-col gap-2 w-full">
                <Button
                  text="Add Content"
                  variant="primary"
                  styleType="primarystyle"
                  fullwidth={true}
                  onClick={() => setShowCard(true)}
                />
                <Button
                  text="Logout"
                  variant="secondary"
                  styleType="secondarystyle"
                  fullwidth={true}
                  onClick={handleLogout}
                />
              </div>
            </div>
          ) : (
            <CreateContent onClose={() => setShowCard(false)} />
          )}
        </div>
      )}
    </div>
  );
}


