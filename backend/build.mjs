import fs from "fs/promises"
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const buildmeta = JSON.parse(await fs.readFile(path.join(__dirname, './buildmeta.json'),{encoding: 'utf-8'}))
buildmeta.version = process.env['VERSION']
buildmeta.revision = process.env['REVISION']
buildmeta.date = process.env['DATE']
await fs.writeFile(path.join(__dirname, './buildmeta.json'), JSON.stringify(buildmeta))
