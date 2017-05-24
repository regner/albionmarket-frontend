
FROM nginx:1.12.0

ADD index.html /usr/share/nginx/html/index.html
ADD dist/build.js /usr/share/nginx/html/dist/build.js