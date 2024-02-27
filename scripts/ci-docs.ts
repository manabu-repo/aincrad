import fs from 'node:fs'
import fg from 'fast-glob'
import { mkdirp } from 'mkdirp'
import { scan } from '@use-kit/node'

// const root = path.dirname(process.cwd())

function ci() {
  const pkgs = './packages'
  const folders = scan(pkgs, { filters: ['docs-cactus', 'utils'] })

  folders.forEach((dir: fs.Dirent) => {
    const folder = `${pkgs}/docs-cactus/src/content/post`
    fs.rmSync(folder, { force: true, recursive: true })

    const contents = scan(`${pkgs}/${dir.name}`)
    contents.forEach(async (cdir: fs.Dirent) => {
      const cf = `${folder}/${cdir.name}`
      mkdirp.sync(cf)

      const files = await fg(`${pkgs}/${dir.name}/${cdir.name}/index.mdx`)
      files.length && fs.copyFileSync(files[0], `${cf}/index.md`)
    })
  })
}

ci()
