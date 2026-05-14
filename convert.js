const fs = require('fs');

let content = fs.readFileSync('src/data/projects.ts', 'utf8');

// Replace the Project interface
content = content.replace(
  /prototypeUrl\?: string;\n\s+caseStudyUrl\?: string;/g,
  ''
);

// We will use a regex to match each object in the projects array.
// But it's easier to just do simple replacements since the structure is consistent.

// Let's replace each occurrence of prototypeUrl and caseStudyUrl.
// Wait, we need to group them.
// We can use a regex to match the object contents.

const lines = content.split('\n');
let newLines = [];
let i = 0;
while (i < lines.length) {
  if (lines[i].includes('prototypeUrl:') || lines[i].includes('caseStudyUrl:')) {
    let customBtns = [];
    let pUrl = '';
    let cUrl = '';
    
    // Collect urls
    while (i < lines.length && (lines[i].includes('prototypeUrl:') || lines[i].includes('caseStudyUrl:'))) {
      if (lines[i].includes('prototypeUrl:')) {
        pUrl = lines[i].match(/prototypeUrl:\s*"(.*?)"/)[1];
      }
      if (lines[i].includes('caseStudyUrl:')) {
        cUrl = lines[i].match(/caseStudyUrl:\s*"(.*?)"/)[1];
      }
      i++;
    }
    
    let btnStr = '    customButtons: [';
    let btns = [];
    if (cUrl) btns.push(`{ label: "Case Study", url: "${cUrl}" }`);
    if (pUrl) btns.push(`{ label: "Prototype", url: "${pUrl}" }`);
    
    // Add comma between btns
    let btnBody = btns.map(b => `      ${b}`).join(',\n');
    
    // Check if the next line is a longDescription or just the end of the object.
    // Wait, the previous line might have had a comma missing.
    // If we replace lines, we should ensure commas are correct.
    
    // We can just append the customButtons block.
    // But since the lines might end with a comma or not, we should handle that.
    let ending = lines[i-1].trim().endsWith(',') ? ',' : '';
    
    newLines.push(btnStr);
    newLines.push(btnBody);
    newLines.push(`    ]${ending}`);
    
    // Do not increment i here, let the loop continue from the current line
    continue;
  }
  newLines.push(lines[i]);
  i++;
}

// Write back
fs.writeFileSync('src/data/projects.ts', newLines.join('\n'), 'utf8');
console.log("Done");
