/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineArrayMember, defineField } from 'sanity'

export default {
  preview: {
    prepare() {
      return { title: `My story` }
    },
  },
  name: 'myStory',
  type: 'document',
  title: 'My story',
  validation: (Rule: { required: () => any }) => Rule.required(),
  fields: [
    {
      type: 'array',
      of: [{ type: 'block' }],
      name: 'aboutMe',
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    defineField({
      name: 'myStoryImageCarousel',
      type: 'array',
      title: 'My Story Image Carousel',
      validation: (Rule: { required: () => any }) => Rule.required(),
      of: [
        defineArrayMember({
          type: 'imageSlide',
          name: 'imageSlide',
          validation: (Rule: { required: () => any }) => Rule.required(),
        }),
      ],
    }),
  ],
}
