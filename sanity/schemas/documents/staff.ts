import { defineType } from 'sanity'

export default defineType({
  name:'staff', title:'Staff', type:'document',
  fields:[
    { name:'name', type:'string', title:'Name' },
    { name:'role', type:'string', title:'Role' },
    { name:'email', type:'string', title:'Email' },
    { name:'phone', type:'string', title:'Phone' },
    { name:'headshot', type:'image', title:'Headshot' },
  ],
})