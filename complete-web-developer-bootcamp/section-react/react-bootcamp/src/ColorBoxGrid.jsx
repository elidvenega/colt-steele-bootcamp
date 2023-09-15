import ColorBox from "./ColorBox";

// eslint-disable-next-line react/prop-types
export default function ColorBoxGrid({ colors }) {
  return (
    <>
      <ColorBox colors={colors} />
      <ColorBox colors={colors} />
      <ColorBox colors={colors} />
      <ColorBox colors={colors} />
      <ColorBox colors={colors} />
    </>
  );
}
