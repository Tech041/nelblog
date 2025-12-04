import type {Rule} from '@sanity/types'

export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title of blog article',
      validation: (Rule: Rule) =>
        Rule.required().error('Please enter a title for the blog article'),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of your blog article',
      options: {
        source: 'title',
      },
      validation: (Rule: Rule) => Rule.required().error('A slug is required to publish this blog'),
    },
    {
      name: 'titleImage',
      type: 'image',
      title: 'Title image',
      validation: (Rule: Rule) => Rule.required().error('Please upload a title image'),
    },
    {
      name: 'category',
      type: 'string',
      title: 'Blog category',
      options: {
        list: [
          {title: 'Technology', value: 'technology'},
          {title: 'Lifestyle', value: 'lifestyle'},
          {title: 'Travel', value: 'travel'},
          {title: 'Food', value: 'food'},
          {title: 'Business', value: 'business'},
        ],
      },
      validation: (Rule: Rule) => Rule.required().error('Select a category for this blog'),
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [{type: 'block'}],
      validation: (Rule: Rule) => Rule.required().error('Blog content cannot be empty'),
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Publication date',
      validation: (Rule: Rule) => Rule.required().error('Please set a publication date'),
    },
  ],
}
