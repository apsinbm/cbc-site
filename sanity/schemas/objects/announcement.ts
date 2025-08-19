import { defineType } from 'sanity'

export default defineType({
  name:'announcement', title:'Announcement', type:'document',
  fields:[
    { name:'title', type:'string', title:'Title' },
    { name:'body', type:'text', title:'Body' },
    { name:'starts', type:'datetime', title:'Visible From' },
    { name:'ends', type:'datetime', title:'Visible Until' },
    { name:'audience', type:'string', title:'Audience', options:{ list:['Public','Members'] } },
  ],
})