import * as React from "react";
import { FC, useEffect, useState } from "react";
import { PredefinedColor, isValidColor, predefinedColors } from "./BadgeColors";
import { PrettyBadgeProps, PrettyBadgeSize } from "./BadgeProps";
const DEFAULT_SIZE: PrettyBadgeSize = "md";
const DEFAULT_COLOR: PredefinedColor = "grey";

const Badge: FC<PrettyBadgeProps> = (props: PrettyBadgeProps) => {
  let [borderRadius, setBorderRadius] = useState<string | undefined>(undefined);
  let [padding, setPadding] = useState<string | undefined>(undefined);
  let [fontSize, setFontSize] = useState<string | undefined>(undefined);
  let [backgroundColor, setBackgroundColor] = useState<string | undefined>(
    undefined
  );
  let [textColor, setTextColor] = useState<string | undefined>(undefined);
  let [_, setBaseColor] = useState<string | undefined>(undefined);
  let [letterSpacing, setLetterSpacing] = useState<string | undefined>(
    undefined
  );
  let [boxShadow, setBoxShadow] = useState<string | undefined>(undefined);
  let [textShadow, setTextShadow] = useState<string | undefined>(undefined);

  useEffect(() => {
    initialiseBorderRadius();
    initialisePadding();
    initialiseFontSize();
    initialiseColors();
    initialiseLetterspacing();
  }, [props]);

  const initialiseBorderRadius = () => {
    const borderRadiusRoundedMap: Record<PrettyBadgeSize, string> = {
      xs: "7px",
      sm: "8px",
      md: "9.5px",
      lg: "10px",
      xl: "11px",
      xxl: "14px",
      xxxl: "16px",
    };

    const borderRadiusMap: Record<string, string> = {
      pill: "100px",
      rounded:
        borderRadiusRoundedMap[(props.size as PrettyBadgeSize) || DEFAULT_SIZE],
    };

    if (!props.borderRadius) {
      setBorderRadius(borderRadiusMap.pill);
      return;
    }

    const borderRadius =
      borderRadiusMap[props.borderRadius as string] ||
      `${props.borderRadius}px`;
    setBorderRadius(borderRadius);
  };

  const initialisePadding = () => {
    const paddingMap: Record<PrettyBadgeSize, string> = {
      xs: "0.25rem 0.35rem",
      sm: "0.275rem 0.4rem",
      md: "0.3rem 0.425rem",
      lg: "0.3125rem 0.5rem",
      xl: "0.3125rem 0.55rem",
      xxl: "0.4rem 0.65rem",
      xxxl: "0.4125rem 0.7rem",
    };
    setPadding(paddingMap[(props.size as PrettyBadgeSize) || DEFAULT_SIZE]);
  };

  const initialiseFontSize = () => {
    const fontSizeMap: Record<PrettyBadgeSize, string> = {
      xs: "0.66rem",
      sm: "0.8rem",
      md: "0.95rem",
      lg: "1.15rem",
      xl: "1.3rem",
      xxl: "1.5rem",
      xxxl: "1.7rem",
    };
    setFontSize(
      fontSizeMap[(props.size || DEFAULT_SIZE) as PrettyBadgeSize] ||
        `${(props.size as number) / 10}px`
    );
  };

  const initialiseLetterspacing = () => {
    const letterSpacingMap: Record<PrettyBadgeSize, string> = {
      xs: "-0.125px",
      sm: "-0.3px",
      md: "-0.4px",
      lg: "-0.6px",
      xl: "-0.625px",
      xxl: "-0.775px",
      xxxl: "-0.925px",
    };
    setLetterSpacing(
      letterSpacingMap[(props.size || DEFAULT_SIZE) as PrettyBadgeSize]
    );
  };

  const initialiseColors = () => {
    let baseColor: string;

    const isPredefinedColor = (value: string): boolean => {
      return value in predefinedColors;
    };

    if (
      props.color != undefined &&
      (props.color as string).charAt(0) != "#" &&
      isPredefinedColor(props.color)
    ) {
      baseColor = (predefinedColors as any)[props.color];
    } else if (!isValidColor(props.color as string)) {
      console.error("Invalid hex code provided, defaulting to 'grey'");
      baseColor =
        predefinedColors[DEFAULT_COLOR as keyof typeof predefinedColors];
    } else {
      baseColor =
        props.color ||
        predefinedColors[DEFAULT_COLOR as keyof typeof predefinedColors];
    }

    const tint = `color-mix(in srgb, ${baseColor}, white 15%)`;
    const shade = `color-mix(in srgb, ${baseColor}, black 70%)`;
    setBaseColor(baseColor);
    setBackgroundColor(tint);
    setTextColor(shade);

    const boxShadowMappings: Record<PrettyBadgeSize, string> = {
      xs: `rgba(0, 0, 0, 0.165) 0px 1.5px 10px 1.5px, color-mix(in srgb, ${baseColor} 90%, black) 0px -1.5px 1.25px inset`,
      sm: `rgba(0, 0, 0, 0.165) 0px 1.5px 10px 1.5px, color-mix(in srgb, ${baseColor} 90%, black) 0px -1.5px 1.25px inset`,
      md: `rgba(0, 0, 0, 0.165) 0px 1px 10px 1px, color-mix(in srgb, ${baseColor} 90%, black) 0px -2px 1.75px inset`,
      lg: `rgba(0, 0, 0, 0.165) 0px 1px 10px 1px, color-mix(in srgb, ${baseColor} 80%, black) 0px -1.35px 1.5px inset`,
      xl: `rgba(0, 0, 0, 0.165) 0px 1px 10px 1px, color-mix(in srgb, ${baseColor} 80%, black) 0px -1.35px 1.5px inset`,
      xxl: `rgba(0, 0, 0, 0.165) 0px 1px 10px 1px, color-mix(in srgb, ${baseColor} 80%, black) 0px -1.45px 1.6px inset`,
      xxxl: `rgba(0, 0, 0, 0.165) 0px 1px 10px 1px, color-mix(in srgb, ${baseColor} 80%, black) 0px -1.75px 1.75px inset`,
    };

    setBoxShadow(
      boxShadowMappings[(props.size as PrettyBadgeSize) || DEFAULT_SIZE]
    );

    const textShadowMappings: Record<PrettyBadgeSize, string> = {
      xs: `0px 0.45px 0.25px color-mix(in srgb, ${baseColor}59, white 55%)`,
      sm: `0px 0.5px 0.25px color-mix(in srgb, ${baseColor}59, white 55%)`,
      md: `0px 0.6px 0.25px color-mix(in srgb, ${baseColor}59, white 55%)`,
      lg: `0px 0.65px 0.25px color-mix(in srgb, ${baseColor}59, white 55%)`,
      xl: `0px 0.8px 0.25px color-mix(in srgb, ${baseColor}59, white 55%)`,
      xxl: `0px 1px 0.25px color-mix(in srgb, ${baseColor}59, white 55%)`,
      xxxl: `0px 1px 0.25px color-mix(in srgb, ${baseColor}59, white 55%)`,
    };

    setTextShadow(
      textShadowMappings[(props.size as PrettyBadgeSize) || DEFAULT_SIZE]
    );
  };

  const badgeStyle = {
    badgeParent: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius,
      backgroundColor,
      padding,
      width: "fit-content",
      boxShadow,
    },
    badgeText: {
      fontSize,
      margin: 0,
      padding: 0,
      color: textColor,
      letterSpacing,
      lineHeight: "100%",
      textShadow,
    },
  };

  return (
    <div
      style={badgeStyle.badgeParent}
      data-size={props.size}
      className={`react-pretty-badge-parent ${props.className}`}
      id={props.id ? `react-pretty-badge-${props.id}` : ""}
    >
      {props.label ? (
        <p style={badgeStyle.badgeText} className="react-pretty-badge-text">
          {props.label}
        </p>
      ) : (
        props.children
      )}
    </div>
  );
};

export default Badge;
