import React from 'react';
import { Instagram, Youtube, Link2, Facebook } from 'lucide-react';

export default function SocialLinksBox() {
  const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/share/1EmHoQxfeu/?mibextid=wwXIfr',
    icon: <Facebook className="w-5 h-5" />,
    hoverClass: 'hover:bg-blue-600 hover:text-white',
    handle: 'JSB Designs Studio'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/jsb_designs_studio?stkn=aGUycTV6M3NyNmhq&utm_source=qr',
    icon: <Instagram className="w-5 h-5" />,
    hoverClass:
      'hover:bg-gradient-to-tr hover:from-yellow-500 hover:via-pink-500 hover:to-purple-600 hover:text-white',
    handle: '@jsb_designs_studio'
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com/@jsb.designsstudio?si=6QXqywEsZ7ETlP4s',
    icon: <Youtube className="w-5 h-5" />,
    hoverClass: 'hover:bg-red-600 hover:text-white',
    handle: 'JSB Designs Studio'
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