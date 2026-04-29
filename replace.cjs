const fs = require('fs');
const path = require('path');

const dir = 'src/app/pages';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

files.forEach(f => {
  const filePath = path.join(dir, f);
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/className="py-24/g, 'className="py-12 lg:py-16');
  fs.writeFileSync(filePath, content);
  console.log('Updated ' + f);
});
