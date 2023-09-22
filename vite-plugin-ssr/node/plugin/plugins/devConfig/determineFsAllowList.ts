export { determineFsAllowList }

import { searchForWorkspaceRoot } from 'vite'
import type { ResolvedConfig } from 'vite'
import path from 'path'
import fs from 'fs'
import type { ConfigVpsResolved } from '../../../../shared/ConfigVps.js'
import { assert } from '../../utils.js'
import { createRequire } from 'module'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
// @ts-ignore Shimed by dist-cjs-fixup.js for CJS build.
const importMetaUrl: string = import.meta.url
const require_ = createRequire(importMetaUrl)
const __dirname_ = dirname(fileURLToPath(importMetaUrl))

async function determineFsAllowList(config: ResolvedConfig, configVps: ConfigVpsResolved) {
  const fsAllow = config.server.fs.allow

  // fsAllow should already contain searchForWorkspaceRoot()
  assert(fsAllow.length >= 1)

  fsAllow.push(process.cwd())
  // searchForWorkspaceRoot() is buggy: https://github.com/vikejs/vike/issues/555.
  // BUt that's not a problem since Vite automatically inserts searchForWorkspaceRoot().
  // We add it again just to be sure.
  fsAllow.push(searchForWorkspaceRoot(process.cwd()))

  // Add node_modules/vike/
  {
    // [RELATIVE_PATH_FROM_DIST] Current directory: node_modules/vike/dist/esm/node/plugin/plugins/config/
    const vitePluginSsrRoot = path.join(__dirname_, '../../../../../../')
    // Assert that `vitePluginSsrRoot` is indeed pointing to `node_modules/vike/`
    require_.resolve(`${vitePluginSsrRoot}/dist/esm/node/plugin/plugins/devConfig/index.js`)
    fsAllow.push(vitePluginSsrRoot)
  }

  // Add Vike extensions, e.g. node_modules/stem-react/
  configVps.extensions.forEach(({ npmPackageRootDir }) => {
    const npmPackageRootDirReal = fs.realpathSync(npmPackageRootDir)
    fsAllow.push(npmPackageRootDir)
    fsAllow.push(npmPackageRootDirReal)
  })
}
