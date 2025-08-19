import { defineType } from 'sanity'

export default defineType({
  name:'clinic', title:'Clinic / Class', type:'document',
  fields:[
    { name:'title', type:'string', title:'Title' },
    { name:'type', type:'string', title:'Type', options:{ list:['Tennis','Fitness','Wellness'] } },
    { name:'level', type:'string', title:'Level' },
    { name:'coach', type:'string', title:'Coach' },
    { name:'schedule', type:'string', title:'Schedule' },
    { name:'price', type:'number', title:'Price' },
    { name:'slots', type:'number', title:'Slots' },
  ],
})