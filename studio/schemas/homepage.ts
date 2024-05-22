/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineArrayMember, defineField } from 'sanity'

export default {
  preview: {
    prepare() {
      return { title: `Homepage` }
    },
  },
  name: 'homepage',
  type: 'document',
  title: 'Homepage',
  validation: (Rule: { required: () => any }) => Rule.required(),
  fields: [
    {
      type: 'array',
      of: [{ type: 'block' }],
      name: 'aboutMe',
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      type: 'array',
      of: [{ type: 'block' }],
      name: 'techStack',
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    defineField({
      name: 'experience',
      type: 'array',
      title: 'Experience',
      validation: (Rule: { required: () => any }) => Rule.required(),
      of: [
        defineArrayMember({
          type: 'experienceItem',
          name: 'experienceItem',
          validation: (Rule: { required: () => any }) => Rule.required(),
        }),
      ],
    }),
  ],
}
