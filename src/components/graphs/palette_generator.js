export const palette_maker = (palette, length) => {
  let new_palette = [];
  let colours_to_generate = length - palette.length;

  if (colours_to_generate > 0) {
    let new_colours = [];
    for (let i = 0; i < colours_to_generate; i++) {
      new_colours.push(
        "#".concat(Math.floor(Math.random() * 16777215).toString(16))
      );
    }

    new_palette = [...palette, ...new_colours];
  } else {
    new_palette = palette.slice(0, length);
  }

  return new_palette;
};
