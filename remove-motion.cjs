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
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk(path.join(__dirname, 'src'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Remove motion import
  content = content.replace(/import\s*{\s*motion(\s*,\s*AnimatePresence)?\s*}\s*from\s*['"]motion\/react['"];?\n?/g, '');
  content = content.replace(/import\s*{\s*AnimatePresence\s*,\s*motion\s*}\s*from\s*['"]motion\/react['"];?\n?/g, '');
  content = content.replace(/import\s*{\s*motion\s*}\s*from\s*['"]framer-motion['"];?\n?/g, '');

  // Replace motion tags
  content = content.replace(/<motion\.([a-zA-Z0-9]+)/g, '<$1');
  content = content.replace(/<\/motion\.([a-zA-Z0-9]+)>/g, '</$1>');

  // Remove motion props
  // We need to carefully remove attributes like initial={{...}} handling nested braces.
  // A simpler way is to just remove the specific keywords and their value blocks.
  // Since we know the codebase, the props usually look like:
  // initial={{ opacity: 0, y: 20 }}
  // animate={{ opacity: 1, y: 0 }}
  // transition={{ duration: 0.5, delay: 0.1 }}
  // whileHover={{ scale: 1.05 }}
  // whileTap={{ scale: 0.95 }}
  // viewport={{ once: true }}
  // whileInView={{ opacity: 1, y: 0 }}
  
  // This regex matches an attribute that starts with one of the animation keywords,
  // followed by ={ ... } where it allows one level of nested braces (which is common for these props)
  const propRegex = /\s+(initial|animate|transition|whileHover|whileTap|viewport|whileInView|exit)=\{({[^}]*}|[^}]+)\}/g;
  
  content = content.replace(propRegex, '');

  // Add a second pass just in case there are nested braces we missed, 
  // or simple string values like transition="spring" (though usually objects)
  content = content.replace(/\s+(initial|animate|transition|whileHover|whileTap|viewport|whileInView|exit)=\{[^}]+\}/g, '');

  // One more pass for deeply nested or multi-line props which are common in motion
  content = content.replace(/\s+(initial|animate|transition|whileHover|whileTap|viewport|whileInView|exit)=\{\{[\s\S]*?\}\}/g, '');

  // Also fix the missing imports reported by user:
  // About.tsx: TrendingUp missing
  if (file.endsWith('About.tsx')) {
    if (!content.includes('TrendingUp')) {
      content = content.replace('Award, Users, Clock, Shield, Heart, Target, Zap', 'Award, Users, Clock, Shield, Heart, Target, Zap, TrendingUp');
    }
  }

  // Contact.tsx: MessageCircle missing
  if (file.endsWith('Contact.tsx')) {
    if (!content.includes('MessageCircle')) {
      content = content.replace('Phone, MapPin, Clock, Send', 'Phone, MapPin, Clock, Send, MessageCircle');
    }
  }

  fs.writeFileSync(file, content, 'utf8');
});

console.log('Cleanup complete');
