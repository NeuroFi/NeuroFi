#!/usr/bin/env python3
import os
import re
import sys

def check_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            chinese_chars = re.findall(r'[\u4e00-\u9fff]', content)
            if chinese_chars:
                print(f"Found Chinese characters in {filepath}:")
                print(f"  {''.join(chinese_chars[:20])}{'...' if len(chinese_chars) > 20 else ''}")
                return True
    except UnicodeDecodeError:
        print(f"Error reading {filepath} - not a text file or encoding issues")
    except Exception as e:
        print(f"Error processing {filepath}: {e}")
    return False

def main():
    found_any = False
    
    for dirpath, dirnames, filenames in os.walk('src'):
        for filename in filenames:
            if filename.endswith(('.ts', '.tsx', '.js', '.jsx', '.md', '.json')):
                filepath = os.path.join(dirpath, filename)
                if check_file(filepath):
                    found_any = True
    
    for dirpath, dirnames, filenames in os.walk('app'):
        for filename in filenames:
            if filename.endswith(('.ts', '.tsx', '.js', '.jsx', '.md', '.json')):
                filepath = os.path.join(dirpath, filename)
                if check_file(filepath):
                    found_any = True
    
    for dirpath, dirnames, filenames in os.walk('public'):
        for filename in filenames:
            if filename.endswith(('.svg', '.md', '.json')):
                filepath = os.path.join(dirpath, filename)
                if check_file(filepath):
                    found_any = True
                    
    if not found_any:
        print("No Chinese characters found in the codebase.")
    
    return 0 if not found_any else 1

if __name__ == "__main__":
    sys.exit(main()) 