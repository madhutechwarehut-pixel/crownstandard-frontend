// utils/renderStars.tsx
import { Star, StarHalf, Star as StarEmpty } from "lucide-react";

export function renderStars(rating: number) {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<Star key={`full-${i}`} fill="yellow" stroke="gray" strokeWidth={1} size={12} />);
  }

  if (hasHalf) {
    stars.push(<StarHalf key="half" fill="yellow" stroke="gray" strokeWidth={1} size={12} />);
  }

  while (stars.length < 5) {
    stars.push(<StarEmpty key={`empty-${stars.length}`} fill="lightgray" stroke="lightgray" strokeWidth={1} size={12} />);
  }

  return <div className="flex gap-1">{stars}</div>;
}
