/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineArrayMember, defineField } from 'sanity'

export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      type: 'string',
      name: 'name',
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      type: 'number',
      name: 'year',
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      type: 'text',
      name: 'description',
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    defineField({
      name: 'techStack',
      type: 'array',
      title: 'Tech Stack',
      validation: (Rule: { required: () => any }) => Rule.required(),
      of: [
        defineArrayMember({
          type: 'string',
          name: 'skill',
          validation: (Rule: { required: () => any }) => Rule.required(),
        }),
      ],
    }),
    {
      type: 'url',
      name: 'githubProjectLink',
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      type: 'url',
      name: 'liveLink',
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      type: 'image',
      name: 'image',
    },
  ],
}
