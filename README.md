访问地址：https://nextjs-demo-black.vercel.app/

使用 TypeScript：https://www.nextjs.cn/learn/excel/typescript/create-tsconfig

通过 pm2 启用
pm2 start npm --name mynext -- run server --watch

可以通过 pm2 monit 查看项目Logs
参考：https://segmentfault.com/a/1190000012774650

使用nginx反向代理，进入目录 /usr/local/etc/nginx/servers，新建文件 next.conf，配置如下内容
upstream nodenext {
    server 127.0.0.1:3000; #next项目 监听端口
    keepalive 64;
}

server {
    listen 8090;
    server_name localhost;
    location / {
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;  
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Nginx-Proxy true;
        proxy_cache_bypass $http_upgrade;
        proxy_pass http://nodenext;
    }
}

配置完后，sudo nginx -s reload
访问 http://localhost:8090/