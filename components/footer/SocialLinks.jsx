import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

export const SocialLinks = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <div className="flex items-center gap-4">
      <span className="text-slate-300 text-sm">Follow us on</span>
      <div className="flex gap-3">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            aria-label={social.label}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center transition-colors duration-200"
          >
            <social.icon className="w-5 h-5 text-[#0F172A]" />
          </a>
        ))}
      </div>
    </div>
  );
};
