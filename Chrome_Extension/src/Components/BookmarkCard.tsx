
import { useState, useRef } from "react";
import { CrossIcon } from "../Icon/Delete";
import { Button } from "./Button";
import { Submit } from "../Icon/Submit";
import { Input } from "./Input";
import { Logo } from "../Icon/Logo";
import axios from "axios";
import { BACKEND_URL } from "../Config";

const ContentType = {
  Youtube: "youtube",
  Twitter: "twitter",
  Documents: "documents",
  Others: "others",
  Account:"account"
} as const;

type ContentType = typeof ContentType[keyof typeof ContentType];

interface CreateContentProps {
  onClose: () => void;
}

export function CreateContent({ onClose }: CreateContentProps) {
  const [loading, setLoading] = useState(false);

  const TitleRef = useRef<HTMLInputElement>(null);
  const LinkRef = useRef<HTMLInputElement>(null);
  const [type, setType] = useState<ContentType>(ContentType.Youtube);

  const addContent = async () => {
    const title = TitleRef.current?.value;
    const link = LinkRef.current?.value;

    if (!title || !link) {
      alert("Please enter both title and link!");
      return;
    }

    try {
      setLoading(true);

   
      const token: string | null = await new Promise((resolve) => {
        if (typeof chrome !== "undefined" && chrome.storage?.local) {
          chrome.storage.local.get(["token"], (result) => {
            resolve(result.token || null);
          });
        } else {
          resolve(localStorage.getItem("token"));
        }
      });

      if (!token) {
        alert("You are not logged in!");
        setLoading(false);
        return;
      }

      await axios.post(
        `${BACKEND_URL}/api/v1/content/addcontent`,
        { type, title, link },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert("Content added successfully!");
      onClose(); 
    } catch (err: any) {
      console.error("content add error:", err);
      alert(err.response?.data?.message || "Failed to add content. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full relative">
      {/* Close button */}
      <div
        className="absolute top-0.5 right-0 cursor-pointer text-slate-400 hover:text-slate-600 transition-colors"
        onClick={onClose}
      >
        <CrossIcon />
      </div>

      {/* Header */}
      <div className="flex gap-2 text-lg text-purple-600 justify-center items-center mb-4 font-bold">
        <Logo />
        <span className="text-slate-800 font-bold tracking-tight">CortexMark</span>
      </div>

      <div className="flex flex-col w-full">
        <Input reference={TitleRef} placeholder="Title" type="text" />
        <Input reference={LinkRef} placeholder="Link" type="text" />
      </div>

      <label className="block text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-2">
        Select Type:
      </label>
      <div className="flex flex-wrap gap-1.5 mb-4 justify-start">
        {Object.values(ContentType).map((ct) => (
          <Button
            key={ct}
            text={ct.charAt(0).toUpperCase() + ct.slice(1)}
            variant={type === ct ? "primary" : "secondary"}
            styleType={type === ct ? "primarystyle" : "secondarystyle"}
            onClick={() => setType(ct)}
          />
        ))}
      </div>

      <div className="flex justify-center mt-2 w-full">
        <Button
          onClick={addContent}
          variant="primary"
          text={loading ? "Saving..." : "Submit"}
          styleType="primarystyle"
          endIcon={<Submit />}
          fullwidth={true}
          loading={loading}
        />
      </div>
    </div>
  );
}
