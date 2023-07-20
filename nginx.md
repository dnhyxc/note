```conf
#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;

events {
  worker_connections  1024;
}

http {
  include       mime.types;
  default_type  application/octet-stream;
  sendfile  on;
  keepalive_timeout   65;
  client_max_body_size  20m;  #上传size改为20m，防止文件过大无法上传

  #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
  #                  '$status $body_bytes_sent "$http_referer" '
  #                  '"$http_user_agent" "$http_x_forwarded_for"';
  #access_log  logs/access.log  main;
  #tcp_nopush     on;

  #keepalive_timeout  0;

  gzip  on;

  #80端口资源前端资源配置，每个不同的端口对应一个前端项目
  server {
    listen       80;
    server_name  wwww.dnhyxc.cn;
    #charset koi8-r;
    #access_log  logs/host.access.log  main;

    #项目静态资源访问配置
    location / {
      root  /usr/local/nginx/dnhyxc/dist; #设置前端资源包的路径
      index   index.html  index.htm;  #设置前端资源入口html文件
      try_files   $uri  $uri/ /index.html;  #解决 browserRouter 页面刷新后出现404
    }

    #接口代理
    location /api/ {
      proxy_set_header  Host  $http_host;
      proxy_set_header  X-Real-IP $remote_addr;
      proxy_set_header  REMOTE-HOST $remote_addr;
      proxy_set_header  X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_pass  http://localhost:9112;
    }

    #代理访问上传到服务器 /upload/image 文件夹下的资源，如 http://43.143.27.249/image/b259b0afde3506761cda3dc953f17f6a.jpg
    #如果不设置这个代理，图片资源就会作为项目路由进行访问，则无法正确访问到图片资源
    location /image/ {
      root  /usr/local/server/src/upload/image;
      rewrite  ^/usr/local/server/src/upload/(.*) /$1 break;
      proxy_pass  http://localhost:9112;
    }

    #代理访问上传到服务器 /upload/atlas 文件夹下的资源，即以 /atlas 开头的路径，
    #会被转发到服务器上的 /usr/local/server/src/upload/atlas 目录下访问资源
    location /atlas/ {
      root  /usr/local/server/src/upload/atlas;
      rewrite  ^/usr/local/server/src/upload/(.*) /$1 break;
      proxy_pass  http://localhost:9112;
    }


    #error_page  404              /404.html;
    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   html;
    }
  }

  #9216端口资源前端资源配置，每个不同的端口对应一个前端项目
  server {
    listen  9216;
    server_name  www.dnhyxc.cn;

    location / {
      root  /usr/local/nginx/html/dist;
      index   index.html  index.htm;
      try_files   $uri  $uri/ /index.html;
    }

    location /api/ {
      proxy_set_header  Host  $http_host;
      proxy_set_header  X-Real-IP $remote_addr;
      proxy_set_header  REMOTE-HOST $remote_addr;
      proxy_set_header  X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_pass  http://localhost:9112;
    }

    location /image/ {
      root  /usr/local/server/src/upload/image;
      rewrite  ^/usr/local/server/src/upload/(.*) /$1 break;
      proxy_pass  http://localhost:9112;
    }

    error_page  500 502 503 504 /50x.html;
    location = /50x.html {
      root  html;
    }
  }

  #9116端口资源前端资源配置，每个不同的端口对应一个前端项目
  server {
    listen  9116;
    server_name  www.dnhyxc.cn;

    location / {
      root  /usr/local/nginx/html_web/dist;
      index   index.html  index.htm;
      try_files   $uri  $uri/ /index.html;
    }

    location /api/ {
      proxy_set_header  Host  $http_host;
      proxy_set_header  X-Real-IP $remote_addr;
      proxy_set_header  REMOTE-HOST $remote_addr;
      proxy_set_header  X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_pass  http://localhost:9112;
    }

    location /image/ {
      root  /usr/local/server/src/upload/image;
      rewrite  ^/usr/local/server/src/upload/(.*) /$1 break;
      proxy_pass  http://localhost:9112;
    }

    error_page  500 502 503 504 /50x.html;
    location = /50x.html {
      root  html;
    }
  }

  #9612端口资源前端资源配置，每个不同的端口对应一个前端项目
  server {
    listen  9612;
    server_name  www.dnhyxc.cn;

    location / {
      root  /usr/local/nginx/web/dist;
      index   index.html  index.htm;
      try_files   $uri  $uri/ /index.html;
    }

    location /api/ {
      proxy_set_header  Host  $http_host;
      proxy_set_header  X-Real-IP $remote_addr;
      proxy_set_header  REMOTE-HOST $remote_addr;
      proxy_set_header  X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_pass  http://localhost:9112;
    }

    location /image/ {
      root  /usr/local/server/src/upload/image;
      rewrite  ^/usr/local/server/src/upload/(.*) /$1 break;
      proxy_pass  http://localhost:9112;
    }
    error_page  500 502 503 504 /50x.html;
    location = /50x.html {
      root  html;
    }
  }

  #8090端口资源前端资源配置，每个不同的端口对应一个前端项目
  server {
    listen  8090;
    server_name  wwww.dnhyxc.cn;

    location / {
      root  /usr/local/nginx/html_admin/dist;
      index   index.html  index.htm;
      try_files   $uri  $uri/ /index.html;
    }

    location /admin/ {
      proxy_set_header  Host  $http_host;
      proxy_set_header  X-Real-IP $remote_addr;
      proxy_set_header  REMOTE-HOST $remote_addr;
      proxy_set_header  X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_pass  http://localhost:9112;
    }
  }
}
```