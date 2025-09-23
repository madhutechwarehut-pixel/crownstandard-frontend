export const CalendarIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="3" y="4" width="18" height="17" rx="2" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M8 2v4M16 2v4M3 10h18" stroke="currentColor" strokeWidth="1.6"/>
  </svg>
);

export const ShieldStarIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 3l7 3v5c0 5-3.5 8.5-7 9-3.5-.5-7-4-7-9V6l7-3Z" stroke="currentColor" strokeWidth="1.6"/>
    <path d="m12 8 1 2 2 .3-1.5 1.5.4 2.1L12 13l-1.9.9.4-2.1L9 10.3l2-.3 1-2Z" fill="currentColor"/>
  </svg>
);

export const StarsBadgeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6"/>
    <path d="m12 7 1.2 2.6 2.8.3-2.1 1.8.6 2.7-2.5-1.4-2.5 1.4.6-2.7L8 9.9l2.8-.3L12 7Z" fill="currentColor"/>
  </svg>
);
