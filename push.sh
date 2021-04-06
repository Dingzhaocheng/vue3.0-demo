time=$(date "+%Y-%m-%d %H:%M:%S")
git pull
yarn build
git add .
git commit -m "$time"
git push -u