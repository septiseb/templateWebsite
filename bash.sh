# Fetch all branches
#git fetch origin

# Get all branch names
branches=$(git branch  | grep -vE "main-stage|HEAD|main" | sed 's/origin\///')

# Checkout the main branch and pull the latest changes
#git checkout main
#git pull origin main

# Loop through each branch and merge changes from the main branch
for branch in $branches; do
    echo "Merging changes into $branch..."
    
    git checkout $branch
    #git pull origin $branch
    git merge main --no-edit
    #git push origin $branch
done

# Go back to the main branch when done
#git checkout main

echo "Done merging changes!"
