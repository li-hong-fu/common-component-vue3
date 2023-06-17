/* eslint-disable no-restricted-syntax */
import { readFileSync, writeFileSync } from 'fs';
import { parse } from 'node-html-parser';
import { glob } from 'glob';
import urlRegex from 'url-regex';

// 获取外部链接的正则表达式
const urlPattern = /(https?:\/\/[^/]*)/i;
const urls = new Set();

// 遍历dist目录中的所有HTML、JS、CSS文件
async function searchDomain() {
    const files = await glob('dist/**/*.{html,css,js}');
    for (const file of files) {
        const source = readFileSync(file, 'utf-8');
        const matches = source.match(urlRegex({ strict: true }));
        if (matches) {
            matches.forEach((url) => {
                const match = url.match(urlPattern);
                if (match && match[1]) {
                    urls.add(match[1]);
                }
            });
        }
    }
}

async function insertLink() {
    const files = await glob('dist/**/*.html');
    const links = [...urls]
        .map((url) => `<link rel="dns-prefetch" href="${url}" />`)
        .join('\n');

    for (const file of files) {
        const html = readFileSync(file, 'utf-8');
        const root = parse(html);
        const head = root.querySelector('head');
        head.insertAdjacentHTML('afterbegin', links);
        writeFileSync(file, root.toString());
    }
}

async function main() {
    await searchDomain();

    await insertLink();
}

main();
