import { olive, sky, grayDark } from "@radix-ui/colors";
import { style } from "@vanilla-extract/css";

export const productCardContainer = style({
  containerType: "inline-size",
  containerName: "product-card-container",
  width: "100%",
  fontFamily: "sans-serif",
  background: olive.olive3,
  border: `1px solid ${olive.olive10}`,
});

export const productCard = style({
  "@container": {
    "(min-width: 500px)": {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "12px",
    },
  },
});

export const productCardImage = style({
  minHeight: "150px",
  width: "100%",
  objectFit: "cover",
});

export const productCardContent = style({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  padding: "12px",
  justifyContent: "center",
});

export const productCardHeading = style({
  fontWeight: "bolder",
  fontSize: "2rem",
  textTransform: "uppercase",
  color: sky.sky11,
  fontFamily: "'Poppins', sans-serif",
});

export const productCardDescription = style({
  fontWeight: "normal",
  display: "none",
  "@container": {
    "(min-width: 800px)": {
      display: "block",
    },
    "(max-width: 500px)": {
      display: "block",
    },
  },
});

export const productCardCTAButton = style({
  background: sky.sky9,
  color: grayDark.gray1,
  fontWeight: "600",
  cursor: "pointer",
  border: "none",
  padding: "8px 12px",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: sky.sky11,
  boxShadow: "none",
  transition: "all 0.25s",
  transform: "translateX(0px) translateY(0px)",
  ":hover": {
    background: sky.sky10,
    boxShadow: `2px 4px ${grayDark.gray1}`,
    transform: "translateX(-2px) translateY(-4px)",
  },
});
