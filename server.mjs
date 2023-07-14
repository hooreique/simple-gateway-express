import 'dotenv/config';
import { log } from 'node:console';
import { env } from 'node:process';
import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();

app.use(
    env.SYSTEM_ADMIT_ROOT,
    createProxyMiddleware({
        target: env.SYSTEM_ADMIN_BASE,
    })
);

app.use(
    '/',
    createProxyMiddleware({
        target: env.USER_FRONT_BASE,
    })
);

app.listen(env.PORT, () => {
    log(`Proxy server is running on port ${env.PORT}`);
});
