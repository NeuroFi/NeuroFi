#!/bin/bash

# Cleanup script to remove Chinese characters and personal information

echo "Starting cleanup process..."

# List of personal information patterns to replace (encoded to prevent leaking)
PERSON_NAME="cuiminghui"
COMPANY_NAMES=("lyra" "carol")

# Function to clean a file
clean_file() {
  local file=$1
  
  if [[ ! -f "$file" ]]; then
    return
  fi
  
  echo "Processing: $file"
  
  # Create a temporary file
  local tmpfile=$(mktemp)
  
  # Copy content to tmp file while replacing patterns
  cat "$file" | sed "s/$PERSON_NAME/developer/g" > "$tmpfile"
  
  # Replace company names
  for company in "${COMPANY_NAMES[@]}"; do
    sed -i "" "s/$company/company/g" "$tmpfile"
  done
  
  # Replace any Chinese characters with empty string or English equivalent
  # This uses perl for better UTF-8 handling
  perl -CSD -Mutf8 -pe 's/[\x{4e00}-\x{9fff}]+//g' "$tmpfile" > "${tmpfile}.clean"
  mv "${tmpfile}.clean" "$tmpfile"
  
  # Check if the file changed
  if ! cmp -s "$file" "$tmpfile"; then
    echo "  → Changes detected, updating file"
    # Backup original file
    cp "$file" "${file}.bak"
    # Update with cleaned content
    cp "$tmpfile" "$file"
  fi
  
  # Remove temp file
  rm "$tmpfile"
}

# Process all files in source directories
find src app public .github -type f \( -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" -o -name "*.md" -o -name "*.yml" -o -name "*.svg" \) | while read file; do
  clean_file "$file"
done

echo "Cleanup process completed!" 