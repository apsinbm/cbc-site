import { defineType } from 'sanity'

export default defineType({
  name:'menu', title:'Menu', type:'document',
  fields:[
    { name:'name', type:'string', title:'Name' },
    { name:'effectiveFrom', type:'date', title:'Effective From' },
    { name:'effectiveTo', type:'date', title:'Effective To' },
    { name:'items', type:'array', title:'Items', of:[{ type:'object', fields:[
      { name:'name', type:'string', title:'Name' },
      { name:'description', type:'text', title:'Description' },
      { name:'price', type:'number', title:'Price' },
      { name:'dietary', type:'array', of:[{type:'string'}], title:'Dietary Tags' },
    ]}]}
  ],
})