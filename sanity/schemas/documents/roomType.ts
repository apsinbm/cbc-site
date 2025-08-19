import { defineType } from 'sanity'

export default defineType({
  name: 'roomType',
  title: 'Room Type',
  type: 'document',
  fields: [
    { name: 'name', type: 'string', title: 'Name' },
    { name: 'slug', type: 'slug', title: 'Slug', options: { source: 'name' } },
    { name: 'blurb', type: 'text', title: 'Short Description' },
    { name: 'images', type: 'array', of: [{type:'image'}], title: 'Images' },
    { name: 'occupancy', type: 'number', title: 'Max Occupancy' },
    { name: 'amenities', type: 'array', of: [{type:'string'}], title: 'Amenities' },
    { name: 'memberPriority', type: 'boolean', title: 'Member Priority' }
  ],
})