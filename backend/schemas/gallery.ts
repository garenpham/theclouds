export default {
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    {name: 'name', title: 'Name', type: 'string'},
    {name: 'image', title: 'image', type: 'image', options: {hotspot: true}},
    {name: 'video', title: 'video', type: 'file'},
    {name: 'description', title: 'Description', type: 'text'},
  ],
}
