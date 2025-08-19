import { defineType } from 'sanity'

export default defineType({
  name: 'cottage',
  title: 'Cottage',
  type: 'document',
  fields: [
    { name: 'name', type:'string', title:'Name' },
    { name: 'slug', type:'slug', title:'Slug', options:{ source:'name' } },
    { name: 'bedrooms', type:'number', title:'Bedrooms' },
    { name: 'blurb', type:'text', title:'Short Description' },
    { name: 'images', type:'array', of:[{type:'image'}], title:'Images' },
    { name: 'locationNotes', type:'text', title:'Location Notes' },
    { name: 'amenities', type:'array', of:[{type:'string'}], title:'Amenities' },
  ],
})