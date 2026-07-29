type IconProps = { size?: number; className?: string };

export function InstagramIcon({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M14 8.5h2.5V5h-2.5c-2.2 0-4 1.8-4 4v2H8v3.5h2.5V21H14v-6.5h2.5l.5-3.5h-3V9c0-.6.4-.5 1-.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function YoutubeIcon({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="2.5" y="6" width="19" height="12" rx="3.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M10.5 9.5v5l4.5-2.5-4.5-2.5Z" fill="currentColor" />
    </svg>
  );
}

export function GoogleIcon({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <path fill="#4285F4" d="M22.5 12.27c0-.79-.07-1.54-.2-2.27H12v4.3h5.9a5.04 5.04 0 0 1-2.18 3.31v2.75h3.53c2.07-1.9 3.25-4.71 3.25-8.09Z" />
      <path fill="#34A853" d="M12 23c2.94 0 5.4-.97 7.2-2.64l-3.53-2.75c-.98.66-2.23 1.05-3.67 1.05-2.82 0-5.2-1.9-6.06-4.46H2.3v2.83A11 11 0 0 0 12 23Z" />
      <path fill="#FBBC05" d="M5.94 14.2A6.6 6.6 0 0 1 5.6 12c0-.76.13-1.5.34-2.2V6.97H2.3A11 11 0 0 0 1 12c0 1.78.43 3.46 1.3 4.97l3.64-2.77Z" />
      <path fill="#EA4335" d="M12 5.38c1.6 0 3.03.55 4.16 1.63l3.12-3.12C17.4 2.09 14.94 1 12 1 7.7 1 3.99 3.47 2.3 6.97l3.64 2.83C6.8 7.24 9.18 5.38 12 5.38Z" />
    </svg>
  );
}

export function LinkedinIcon({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="7.5" cy="8" r="1.2" fill="currentColor" />
      <path d="M7.5 11v6M11 11v6M11 13.5c0-1.5 1-2.5 2.5-2.5s2.5 1 2.5 2.5V17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
