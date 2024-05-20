import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {media, mediaAssetSource} from 'sanity-plugin-media'

const singletonActions = new Set(['publish', 'discardChanges', 'restore'])

const singletonTypes = new Set(['homepage'])

export default defineConfig({
  name: 'default',
  title: 'Content Studio',
  basePath: '/content',

  projectId: 'q20xjmol',
  dataset: 'lucas-silbernagel-portfolio',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Singleton items
            S.listItem()
              .title('Homepage')
              .id('homepage')
              .child(S.document().schemaType('homepage').documentId('homepage')),
              // Regular document types
            S.documentTypeListItem('project').title('Projects'),
          ]),
          
    }),
    visionTool(),
    media(),
  ],

  form: {
    // Don't use this plugin when selecting files only (but allow all other enabled asset sources)
    file: {
      assetSources: (previousAssetSources) => {
        return previousAssetSources.filter((assetSource) => assetSource !== mediaAssetSource)
      },
    },
  },

  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({action}) => action && singletonActions.has(action))
        : input,
  },

  schema: {
    types: schemaTypes,
    templates: (templates) => templates.filter(({schemaType}) => !singletonTypes.has(schemaType)),
  },
})
