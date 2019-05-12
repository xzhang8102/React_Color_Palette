//{
//  paletteName: 'Material UI Colors',
//  id: 'material-ui-colors',
//  emoji: '🎨',
//  colors: [
//    { name: 'red', color: '#F44336' },
//    { name: 'pink', color: '#E91E63' },
//    { name: 'purple', color: '#9C27B0' },
//    { name: 'deeppurple', color: '#673AB7' },
//    { name: 'indigo', color: '#3F51B5' },
//    { name: 'blue', color: '#2196F3' },
//    { name: 'lightblue', color: '#03A9F4' },
//    { name: 'cyan', color: '#00BCD4' },
//    { name: 'teal', color: '#009688' },
//    { name: 'green', color: '#4CAF50' },
//    { name: 'lightgreen', color: '#8BC34A' },
//    { name: 'lime', color: '#CDDC39' },
//    { name: 'yellow', color: '#FFEB3B' },
//    { name: 'amber', color: '#FFC107' },
//    { name: 'orange', color: '#FF9800' },
//    { name: 'deeporange', color: '#FF5722' },
//    { name: 'brown', color: '#795548' },
//    { name: 'grey', color: '#9E9E9E' },
//    { name: 'bluegrey', color: '#607D8B' }
//  ]
//}

import chroma from 'chroma-js';

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

export function generatePalette(starter) {
  let newPalette = {
    ...starter,
    colors: {}
  };
  levels.forEach(level => {
    newPalette.colors[level] = [];
  });
  for (let color of starter.colors) {
    // get the hex color code array from the lightest to the darkest
    let scales = getColorScale(color.color);
    scales.forEach((scale, i) => {
      newPalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: color.name.toLowerCase().replace(/ /g, '-'),
        hex: scale,
        rgb: chroma(scale).css(),
        rgba: chroma(scale)
          .css()
          .replace('rgb', 'rgba')
          .replace(')', ',1.0)')
      });
    });
  }
  return newPalette;
}

function getColorScale(hexColor) {
  const darkColor = chroma(hexColor)
    .darken(1.4)
    .hex();
  return chroma
    .scale([darkColor, hexColor, '#fff'])
    .mode('lab')
    .colors(10)
    .reverse();
}
