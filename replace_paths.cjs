const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.tsx') || file.endsWith('.html') || file.endsWith('.ts')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk(path.join(__dirname, 'src'));
files.push(path.join(__dirname, 'index.html'));

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    
    // Replace all instances of /assets/images/ with /assets/
    content = content.replace(/\/assets\/images\//g, '/assets/');
    
    // Ensure logo.webp is logo.png as it does not exist in the folder
    content = content.replace(/logo\.webp/g, 'logo.png');
    
    if (content !== original) {
      fs.writeFileSync(file, content, 'utf8');
    }
  }
});

console.log('Path replacement complete');
