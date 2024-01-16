const getColorFromFirstChar = (str: string | undefined): string => {
  if (!str || str.length === 0) {
    return "#000";
  }

  const charCode = str.toLowerCase().charCodeAt(0);
  const hue = (charCode % 26) / 26; // Normalize to a value between 0 and 1
  const saturation = 100;
  const lightness = 33;

  const color = `hsl(${Math.floor(hue * 360)}, ${saturation}%, ${lightness}%)`;
  return color;
};

export default getColorFromFirstChar;
