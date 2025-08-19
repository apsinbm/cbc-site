import { defineType } from 'sanity'

export default defineType({
  name:'event', title:'Event', type:'document',
  fields:[
    { name:'title', type:'string', title:'Title' },
    { name:'slug', type:'slug', title:'Slug', options:{ source:'title' } },
    { name:'category', type:'string', title:'Category',
      options:{ list:['Dining','Tennis','Spa','Fitness','Junior','Social'] } },
    { name:'start', type:'datetime', title:'Start' },
    { name:'end', type:'datetime', title:'End' },
    { name:'image', type:'image', title:'Image' },
    { name:'location', type:'string', title:'Location' },
    { name:'audience', type:'string', title:'Audience' },
    { name:'description', type:'text', title:'Description' },
    { name:'rsvpLink', type:'url', title:'RSVP Link' },
    { name:'recurrence', type:'string', title:'Recurrence (RRULE or note)' },
  ],
})