export const predefinedColors = {
  red: "#FF5924",
  blue: "#3089F2",
  green: "#2ecc71",
  yellow: "#FBBE29",
  purple: "#9b59b6",
  grey: "#8a8a8a",
  orange: "#FF843E",
  peach: "#FEB8B7",
  cyan: "#0ABDF6",
} as const;

export type PredefinedColor = keyof typeof predefinedColors;
export type BadgeColor = PredefinedColor | string;

export const isValidColor = (color: string): boolean => {
  return (
    /^#([0-9A-Fa-f]{3}){1,2}$/.test(color) ||
    /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/.test(color)
  );
};
