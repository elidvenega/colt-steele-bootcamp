import ColorBox from "./ColorBox";

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
