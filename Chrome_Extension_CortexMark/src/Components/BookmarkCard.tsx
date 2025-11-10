// 
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

      // Get token from extension storage
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
      onClose(); // automatically closes card after submit
    } catch (err: any) {
      console.error("content add error:", err);
      alert(err.response?.data?.message || "Failed to add content. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-white border shadow-lg rounded-xl p-4 mt-2 relative">
      {/* Close button */}
      <div
        className="absolute top-3 right-3 cursor-pointer"
        onClick={onClose}
      >
        <CrossIcon />
      </div>

      {/* Header */}
      <div className="flex gap-2 text-xl text-purple-500 justify-center mb-4">
        <Logo />
        <b>CortexMark</b>
      </div>

      {/* Inputs */}
      <Input reference={TitleRef} placeholder="Title" type="text" />
      <Input reference={LinkRef} placeholder="Link" type="text" />

      {/* Type selection */}
      <b className="block text-purple-600 mt-3 mb-2">Select your type:</b>
      <div className="flex flex-wrap gap-2">
        {Object.values(ContentType).map((ct) => (
          <Button
            key={ct}
            text={ct}
            variant={type === ct ? "primary" : "secondary"}
            styleType={type === ct ? "primarystyle" : "secondarystyle"}
            onClick={() => setType(ct)}
          />
        ))}
      </div>

      {/* Submit */}
      <div className="flex justify-center mt-4">
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
