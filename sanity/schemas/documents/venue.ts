import { defineType } from 'sanity'

export default defineType({
  name:'venue', title:'Event Venue', type:'document',
  fields:[
    { name:'name', type:'string', title:'Name' },
    { name:'slug', type:'slug', title:'Slug', options:{ source:'name' } },
    { name:'images', type:'array', of:[{type:'image'}], title:'Images' },
    { name:'capacity', type:'number', title:'Capacity' },
    { name:'siteFees', type:'string', title:'Site Fees' },
    { name:'rainPlan', type:'text', title:'Rain Plan' },
    { name:'description', type:'text', title:'Description' },
  ],
})