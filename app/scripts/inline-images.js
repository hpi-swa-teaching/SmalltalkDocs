const fs = require('fs');
const path = require('path');

/* you can make changes here */
const buildFolder = 'build';
const imageTypes = { png: 'data:image/png', ico: 'data:image/x-icon' };

/* don't change anything below this line! */
const regex = /"(\.?[\w/]+\.(\w{2,5}))"/gm;
const htmlPath = path.join(buildFolder, './index.html');
let htmlFile = fs.readFileSync(htmlPath, 'utf8');

let grp;
// eslint-disable-next-line no-cond-assign
while ((grp = regex.exec(htmlFile)) !== null) {
  // Necessary to prevent infinite loops with zero-width regex matches
  if (grp.index === regex.lastIndex) {
    regex.lastIndex += 1;
  }

  if (grp.length === 3 && imageTypes[grp[2]] != null) {
    const fileName = grp[1];
    const extension = grp[2];
    const filePath = path.join(buildFolder, fileName);
    // eslint-disable-next-line no-console
    console.log('Included:', filePath);

    const base64 = fs.readFileSync(filePath, 'base64');
    const imgSrc = `${imageTypes[extension]};base64,${base64}`;

    htmlFile = htmlFile.replace(fileName, imgSrc);
  }
}

fs.writeFileSync(htmlPath, htmlFile);
// eslint-disable-next-line no-console
console.log(`--> exported to ${htmlPath}`);
