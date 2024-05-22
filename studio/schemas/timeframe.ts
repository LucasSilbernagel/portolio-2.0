/* eslint-disable @typescript-eslint/no-explicit-any */
export default {
  type: 'object',
  name: 'timeframe',
  fields: [
    {
      type: 'date',
      name: 'startDate',
      options: { dateFormat: 'YYYY-MM' },
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    { type: 'date', name: 'endDate', options: { dateFormat: 'YYYY-MM' } },
  ],
}
