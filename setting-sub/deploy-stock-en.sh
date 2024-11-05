#!/bin/bash
npm run build || { echo "Failed to build'"; exit 1; }

# Step 1: Change directory to 'build'
cd build || { echo "Failed to change directory to 'build'"; exit 1; }

# Step 2: Initialize a new git repository
git init || { echo "Failed to initialize git repository"; exit 1; }

# Step 3: Commit changes
git add . || { echo "Failed to add files to git"; exit 1; }
git commit -m '1' || { echo "Failed to commit changes"; exit 1; }

# Step 4: Add remote repository
git remote add origin https://github.com/docustocken/docustocken.github.io || { echo "Failed to add remote repository. change REPO_URL"; exit 1; }

# Step 5: Push changes to remote repository
git push --set-upstream origin master --force || { echo "Failed to push changes"; exit 1; }

# Step 6: Change directory back to the parent directory
cd .. || { echo "Failed to change directory back to parent directory"; exit 1; }

# Step 7: Delete the 'build' folder
rm -rf build || { echo "Failed to delete 'build' folder"; exit 1; }
