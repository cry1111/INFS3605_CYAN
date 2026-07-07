import React from 'react';
import Markdown from 'react-markdown';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Bot, User } from 'lucide-react';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ChatMessageProps {
  role: 'user' | 'model';
  text: string;
  onFollowUpClick: (text: string) => void;
}

export function ChatMessage({ role, text, onFollowUpClick }: ChatMessageProps) {
  const isModel = role === 'model';

  // We need to extract the "You might also want to ask:" section and render it as tappable buttons.
  let mainText = text;
  let followUps: string[] = [];

  if (isModel) {
    const followUpMarker = 'You might also want to ask:';
    const splitIndex = text.lastIndexOf(followUpMarker);
    if (splitIndex !== -1) {
      mainText = text.substring(0, splitIndex).trim();
      const followUpSection = text.substring(splitIndex + followUpMarker.length).trim();
      
      // Parse bullet points from followUpSection
      const lines = followUpSection.split('\n');
      for (const line of lines) {
        const match = line.match(/^[-*]\s*(.+)$/);
        if (match) {
          followUps.push(match[1].trim());
        }
      }
    }
  }

  return (
    <div className={cn("flex w-full", isModel ? "justify-start" : "justify-end")}>
      <div className={cn(
        "flex max-w-[85%] sm:max-w-[75%] gap-4 p-5 sm:p-6",
        isModel ? "bg-white border border-[#e1e0d5] shadow-sm rounded-[32px] rounded-tl-none text-[#2c332a]" : "bg-[#4a6741] text-white rounded-[24px] rounded-tr-none shadow-sm"
      )}>
        {isModel && (
          <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-[#e1e8dc] text-[#4a6741] rounded-full">
            <Bot size={18} />
          </div>
        )}
        
        <div className="flex-1 overflow-hidden flex flex-col gap-2">
          {isModel ? (
            <div className="text-sm leading-relaxed text-[#2c332a] flex flex-col gap-3">
              <Markdown
                components={{
                  h3: ({node, ...props}) => <h3 className="text-lg font-bold text-[#4a6741] mt-2 mb-1" {...props} />,
                  h4: ({node, ...props}) => <h4 className="text-base font-bold text-[#4a6741] mt-2 mb-1" {...props} />,
                  p: ({node, ...props}) => <p className="m-0" {...props} />,
                  ul: ({node, ...props}) => <ul className="list-none m-0 space-y-3" {...props} />,
                  ol: ({node, ...props}) => <ol className="list-decimal pl-5 m-0 space-y-3" {...props} />,
                  li: ({node, ...props}) => (
                    <li className="flex gap-3 m-0">
                      <span className="text-[#4a6741] font-bold">•</span>
                      <span>{props.children}</span>
                    </li>
                  ),
                  a: ({node, ...props}) => <a className="text-[#4a6741] hover:underline font-medium" {...props} />,
                  strong: ({node, ...props}) => <strong className="font-semibold text-[#2c332a]" {...props} />
                }}
              >
                {mainText}
              </Markdown>
            </div>
          ) : (
            <div className="whitespace-pre-wrap text-sm">{mainText}</div>
          )}

          {isModel && followUps.length > 0 && (
            <div className="mt-4 pt-4 border-t border-dashed border-[#e1e0d5] flex flex-col gap-2">
              <p className="text-sm font-semibold text-[#2c332a]">You might also want to ask:</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {followUps.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => onFollowUpClick(q)}
                    className="px-4 py-2 text-xs font-medium rounded-full bg-[#f1f0e8] border border-[#d1d0c5] hover:bg-[#e1e8dc] text-[#2c332a] transition-colors text-left"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {!isModel && (
          <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-white/20 text-white rounded-full">
            <User size={18} />
          </div>
        )}
      </div>
    </div>
  );
}
