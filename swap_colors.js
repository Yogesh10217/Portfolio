const fs = require('fs');
const path = require('path');

const directory = "c:/Users/Yogesh E/OneDrive/Desktop/Manjus/Portfolio/src";

const replacements = {
    "#8b5cf6": "#f97316", // orange-500
    "#d946ef": "#ef4444", // red-500
    "139, 92, 246": "249, 115, 22", // RGB for orange
    "139,92,246": "249,115,22",
    "#06b6d4": "#eab308", // cyan to yellow for the ring
    
    // Tailwind classes
    "violet": "orange",
    "fuchsia": "red",
    "purple": "orange"
};

function walkDir(dir) {
    fs.readdirSync(dir).forEach(file => {
        let fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walkDir(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.css')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let original = content;
            
            for (const [oldVal, newVal] of Object.entries(replacements)) {
                content = content.split(oldVal).join(newVal);
            }
            
            if (content !== original) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Updated ${file}`);
            }
        }
    });
}

walkDir(directory);
