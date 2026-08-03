import os
import re

directory = "c:/Users/Yogesh E/OneDrive/Desktop/Manjus/Portfolio/src"

replacements = {
    # CSS Vars
    "#8b5cf6": "#f97316", # orange-500
    "#d946ef": "#ef4444", # red-500
    "139, 92, 246": "249, 115, 22", # RGB for orange
    "139,92,246": "249,115,22",
    "#06b6d4": "#eab308", # cyan to yellow for the ring
    
    # Tailwind classes
    "violet": "orange",
    "fuchsia": "red",
    "purple": "orange"
}

for root, _, files in os.walk(directory):
    for file in files:
        if file.endswith((".tsx", ".css")):
            filepath = os.path.join(root, file)
            with open(filepath, "r", encoding="utf-8") as f:
                content = f.read()
                
            original = content
            for old, new in replacements.items():
                content = content.replace(old, new)
                
            if content != original:
                with open(filepath, "w", encoding="utf-8") as f:
                    f.write(content)
                print(f"Updated {file}")
