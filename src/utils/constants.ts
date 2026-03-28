import { StaticImageData } from 'next/image';

export type Project = {
  id: number
  image: string | StaticImageData
  githubUrl?: string
  liveUrl?: string
  description?: string
  title: string
  tags: string[]
  previewTags: string[]
  functionalities: string[]
  haveDocs?: boolean
}

 export const skills: string[] = [
    'javascript',
    'typescript',
    'react',
    'redux',
    'vue',
    'vite',
    'vitest',
    'tailwind',
    'css',
    'sass',
    'bootstrap',
    'materialui',
    'emotion',
    'styledcomponents',
    'next',
    'aws',
    'prisma',
    'nodejs',
    'express',
    'firebase',
    'jest',
    'docker',
    'graphql',
    'html',
    'vscode',
    'webpack',
    'postgresql',
    'mongodb',
    'bun',
    'yarn',
    'npm',
    'bash',
    'postman',
    'powershell'
  ]

