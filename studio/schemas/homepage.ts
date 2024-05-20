/* eslint-disable @typescript-eslint/no-explicit-any */
import {defineArrayMember, defineField} from 'sanity'

export default {
  preview: {
    prepare() {
      return { title: `Homepage` };
    },
  },
  name: 'homepage',
  type: 'document',
  title: 'Homepage',
  fields: [
    {
      type: 'array', 
      of: [{type: 'block'}],
      name: 'aboutMe',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      type: 'array', 
      of: [{type: 'block'}],
      name: 'techStack',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    // {
    //   type: 'array',
    //   name: 'about',
    //   validation: (Rule: {required: () => any}) => Rule.required(),
    //   of: [
    //     {type: 'block'},
    //     {
    //       title: 'Image',
    //       name: 'image',
    //       type: 'image',
    //       fields: [
    //         {
    //           name: 'altText',
    //           type: 'string',
    //           title: 'AltText',
    //           validation: (Rule: {required: () => any}) => Rule.required(),
    //         },
    //       ],
    //     },
    //   ],
    // },
    // defineField({
    //   name: 'prices',
    //   type: 'array',
    //   title: 'Prices',
    //   validation: (Rule: {required: () => any}) => Rule.required(),
    //   of: [
    //     defineArrayMember({
    //       type: 'priceItem',
    //       name: 'priceItem',
    //     }),
    //   ],
    // }),
    // {
    //   type: 'array',
    //   name: 'pricingDescription',
    //   validation: (Rule: {required: () => any}) => Rule.required(),
    //   of: [
    //     {type: 'block'},
    //     {
    //       title: 'Image',
    //       name: 'image',
    //       type: 'image',
    //       fields: [
    //         {
    //           name: 'altText',
    //           type: 'string',
    //           title: 'AltText',
    //           validation: (Rule: {required: () => any}) => Rule.required(),
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   type: 'array',
    //   name: 'address',
    //   validation: (Rule: {required: () => any}) => Rule.required(),
    //   of: [
    //     {type: 'block'},
    //     {
    //       title: 'Image',
    //       name: 'image',
    //       type: 'image',
    //       fields: [
    //         {
    //           name: 'altText',
    //           type: 'string',
    //           title: 'AltText',
    //           validation: (Rule: {required: () => any}) => Rule.required(),
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   type: 'string',
    //   name: 'email',
    //   validation: (Rule: {required: () => any}) => Rule.required(),
    // },
    // {
    //   type: 'string',
    //   name: 'phone',
    //   validation: (Rule: {required: () => any}) => Rule.required(),
    // },
    // {
    //   type: 'image',
    //   name: 'map',
    //   validation: (Rule: {required: () => any}) => Rule.required(),
    // },
  ],
}
