import { defineType } from 'sanity'

export default defineType({
  name:'reciprocalClub', title:'Reciprocal Club', type:'document',
  fields:[
    { name:'name', type:'string', title:'Name' },
    { name:'city', type:'string', title:'City' },
    { name:'country', type:'string', title:'Country' },
    { name:'url', type:'url', title:'Website' },
    { name:'notes', type:'text', title:'Notes' },
    { name:'image', type:'image', title:'Image' },
    { name:'tags', type:'array', of:[{type:'string'}], title:'Tags' },
  ],
})