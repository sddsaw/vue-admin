import packageConfig from '../../package.json'
import { WebLogger } from '@/utils/log'
function log (t:string = '', e:string = 'console.log') {
  WebLogger.log(`%c ${t} %c ${e} %c`, 'background:#35495E; padding: 2px;margin:10px 0; border-radius: 3px 0 0 3px; color: #fff;', 'background:#57a3f3;margin:10px 0; padding: 2px; border-radius: 0 3px 3px 0;  color: #fff;', 'background:transparent')
}
log(`${import.meta.env.MODE}`, `${packageConfig.version}`)
