 
  echo ${uncleding} |  ~/.ssh/uncleding
          chmod 400 ~/.ssh/uncleding
          ssh -i ~/.ssh/uncleding -o StrictHostKeyChecking=no root@121.36.41.47 "cd /root/home/uncleding/website;git pull;
   