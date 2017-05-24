echo off
kubectl.exe --namespace albionmarket set image deploy/albionmarket-frontend albionmarket-frontend=us.gcr.io/personal-projects-1369/albionmarket/frontend:%1