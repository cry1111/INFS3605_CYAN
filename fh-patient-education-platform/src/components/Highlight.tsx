/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface HighlightProps {
  text: string;
  query: string;
}

export default function Highlight({ text, query }: HighlightProps) {
  if (!query || !query.trim()) {
    return <>{text}</>;
  }

  // Escape special regex characters to prevent syntax crashes
  const escapedQuery = query.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  const regex = new RegExp(`(${escapedQuery})`, 'gi');
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, index) => {
        const isMatch = regex.test(part);
        return isMatch ? (
          <mark 
            key={index} 
            className="search-match bg-amber-200 text-slate-950 font-bold rounded-xs px-0.5 shadow-xs transition-all duration-150 inline-block scroll-mt-24"
            aria-label={`Search match: ${part}`}
          >
            {part}
          </mark>
        ) : (
          part
        );
      })}
    </>
  );
}
