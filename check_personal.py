#!/usr/bin/env python3
import os
import re
import sys

def check_file(filepath, patterns):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            for pattern, label in patterns:
                matches = re.findall(pattern, content, re.IGNORECASE)
                if matches:
                    print(f"Found {label} in {filepath}")
                    print(f"  Matches: {matches[:2]}...")
                    return True
    except UnicodeDecodeError:
        # Skip binary files
        pass
    except Exception as e:
        print(f"Error processing {filepath}: {e}")
    return False

def main():
    # Define patterns to search for (sensitive information)
    patterns = [
        (r'username', 'username example'),
        (r'company1', 'company example'),
        (r'company2', 'company example'),
        (r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}', 'email address'),
        # More specific phone number pattern that won't match prices or IDs
        (r'\b(?:\+?1[-.]?)?\(?(?:[0-9]{3})\)?[-. ]?[0-9]{3}[-. ]?[0-9]{4}\b', 'phone number')
    ]
    
    found_any = False
    
    dirs_to_search = ['src', 'app', 'public', '.github']
    
    for base_dir in dirs_to_search:
        if not os.path.exists(base_dir):
            continue
            
        for dirpath, dirnames, filenames in os.walk(base_dir):
            for filename in filenames:
                if filename.endswith(('.ts', '.tsx', '.js', '.jsx', '.md', '.json', '.svg', '.yml')):
                    filepath = os.path.join(dirpath, filename)
                    if check_file(filepath, patterns):
                        found_any = True
    
    if not found_any:
        print("No personal information found in the codebase.")
    
    return 0 if not found_any else 1

if __name__ == "__main__":
    sys.exit(main()) 