import React from 'react';
import { Instagram, Youtube, Link2 } from 'lucide-react';

export default function SocialLinksBox() {
  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/js.balaji_design_studios?igsh=dm8yem96enM4bnAz',
      icon: <Instagram className="w-5 h-5" />,
      hoverClass: 'hover:bg-gradient-to-tr hover:from-yellow-500 hover:to-purple-600 hover:text-white',
      handle: '@js.balaji_design_studios'
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@jsbalajidesignerstudio?si=6mYnNv1MzzdqbRvf',
      icon: <Youtube className="w-5 h-5" />,
      hoverClass: 'hover:bg-red-600 hover:text-white',
      handle: 'JSB Balaji Designer Studio'
    },
    {
      name: 'Linktree',
      url: 'https://linktr.ee/jsbdesignstudio',
      icon: <Link2 className="w-5 h-5" />,
      hoverClass: 'hover:bg-emerald-500 hover:text-zinc-900',
      handle: 'jsbdesignstudio'
    }
  ];

  return (
    <div className="w-full max-w-md p-6 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-100 shadow-xl">
      <div className="mb-4">
        <h3 className="text-sm font-semibold tracking-wider uppercase text-amber-500">
          Connect With Us
        </h3>
        <p className="text-xs text-zinc-400 mt-1">
          Explore our design portfolios and updates across platforms.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-between p-3 rounded-xl bg-zinc-800/50 border border-zinc-800 text-zinc-300 transition-all duration-300 transform hover:-translate-y-0.5 ${link.hoverClass}`}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-zinc-900/80 rounded-lg">
                {link.icon}
              </div>
              <div className="flex flex-col text-left">
                {/* <span className="text-sm font-medium">{link.name}</span> */}
                <span className="text-xs opacity-70 font-mono">{link.handle}</span>
              </div>
            </div>
            <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              Visit →
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}