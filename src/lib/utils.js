import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Dynamically calculates years of experience from a start date (Default: Jan 2023)
 * Automatically increments over time (e.g. 3+ in 2026, 4+ in 2027)
 */
export function getYearsOfExperience(startDateStr = "2023-01-01") {
  const start = new Date(startDateStr);
  const now = new Date();
  let years = now.getFullYear() - start.getFullYear();
  const monthDiff = now.getMonth() - start.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < start.getDate())) {
    years--;
  }
  return `${years > 0 ? years : 1}+`;
}

/**
 * Formats detailed career experience duration (e.g. "3 yrs 6 mos")
 */
export function getDetailedExperience(startDateStr = "2023-01-01") {
  const start = new Date(startDateStr);
  const now = new Date();
  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();
  if (now.getDate() < start.getDate()) {
    months--;
  }
  if (months < 0) {
    years--;
    months += 12;
  }
  return `${years} yrs ${months} mos`;
}
