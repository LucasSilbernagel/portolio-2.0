/* eslint-disable @typescript-eslint/no-explicit-any */
export default {
  type: 'object',
  name: 'imageSlide',
  fields: [
    {
      type: 'image',
      name: 'image',
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      type: 'string',
      name: 'altText',
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
  ],
}
