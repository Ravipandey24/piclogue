import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function textContent(element: React.ReactNode): string {
  if (!element) {
    return "";
  }
  if (typeof element === "string") {
    return element;
  }
  if (Array.isArray(element)) {
    return element.map(textContent).join("");
  }
  return textContent((element as React.ReactElement).props.children);
}

