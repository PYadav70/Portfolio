'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ProfilePhotoProps {
  className?: string;
}

// Simply place your profile image in the /public folder (e.g. public/profile.jpg or public/profile.png)
const LOCAL_PROFILE_IMAGE = '/myimage.png';
const FALLBACK_PROFILE_IMAGE = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800';

export function ProfilePhoto({ className = "w-28 h-28 sm:w-36 sm:h-36" }: ProfilePhotoProps) {
  const [imageSrc, setImageSrc] = useState<string>(LOCAL_PROFILE_IMAGE);

  return (
    <div className={`relative rounded-2xl p-1 bg-gradient-to-tr from-cyan-500 via-sky-500 to-indigo-500 shadow-2xl shadow-cyan-500/25 group ${className}`}>
      
      {/* Container Frame */}
      <div className="w-full h-full rounded-xl bg-slate-950 overflow-hidden relative">
        
        {/* Next.js Optimized Image */}
        <Image
          src={imageSrc}
          alt="Pappu Kumar Yadav"
          fill
          sizes="(max-width: 768px) 144px, 144px"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          priority
          referrerPolicy="no-referrer"
          onError={() => {
            if (imageSrc !== FALLBACK_PROFILE_IMAGE) {
              setImageSrc(FALLBACK_PROFILE_IMAGE);
            }
          }}
        />

        {/* Glossy Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60 pointer-events-none" />
      </div>
    </div>
  );
}

