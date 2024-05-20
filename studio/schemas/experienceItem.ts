import {defineArrayMember, defineField} from 'sanity'

export default {
  type: 'object',
  name: 'experienceItem',
  fields: [
    {type: 'string', name: 'title', validation: (Rule: {required: () => any}) => Rule.required(),},
    {type: 'string', name: 'company', validation: (Rule: {required: () => any}) => Rule.required(),},
    {type: 'url', name: 'companyWebsite', validation: (Rule: {required: () => any}) => Rule.required(),},
    {type: 'timeframe', name: 'timeframe', validation: (Rule: {required: () => any}) => Rule.required(),},
    defineField({
      name: 'accomplishments',
      type: 'array',
      title: 'Accomplishments',
      of: [
        defineArrayMember({
          type: 'text',
          name: 'accomplishment',
          validation: (Rule: {required: () => any}) => Rule.required(),
        }),
      ],
    }),
  ],
}
