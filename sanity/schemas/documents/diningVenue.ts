import { defineType } from 'sanity'

export default defineType({
  name: 'diningVenue',
  title: 'Dining Venue',
  type: 'document',
  fields: [
    { name:'name', type:'string', title:'Name' },
    { name:'slug', type:'slug', title:'Slug', options:{ source:'name' } },
    { name:'images', type:'array', of:[{type:'image'}], title:'Images' },
    { name:'hours', type:'string', title:'Hours' },
    { name:'reservationInstructions', type:'text', title:'Reservation Instructions' },
    { name:'menus', type:'array', of:[{type:'reference', to:[{type:'menu'}]}], title:'Menus' },
  ],
})