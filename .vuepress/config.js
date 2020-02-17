module.exports = {
  base: '/template2020/',
  dest: 'docs',
  title: 'Vue.js Colombia',
  description: ' ',
  themeConfig: {
    nav: [
      { text:'Bienvenid@', link: '/bienvenid@/' },
      { text:'Instalacion', link: '/instalacion/' },
      { text: 'GitHub', link: 'https://github.com/vuejs-colombia' }
    ],
		sidebar: [
			{
				title: 'Desafio # 1',
				children: [
					'/desafio1/vue-cli',
					'/desafio1/HMR',
          '/desafio1/vue-dev-tools',
          '/desafio1/transitions',
          '/desafio1/filters'
				]
			},
			{
				title: 'Desafio # 2',
				children: [
					'/desafio2/Custom-Directives',
					'/desafio2/Slots',
					'/desafio2/Mixins'
				]
      },
			{
				title: 'Desafio # 3',
				children: [
					'/desafio3/Lifecycle-Hooks',
					'/desafio3/Ajax-con-Axios'				]
      },
			{
				title: 'Desafio # 4',
				children: [
					'/desafio4/Custom-Events',
					'/desafio4/Dynamic-Components',
          '/desafio4/Custom-Input-Components',
					'/desafio4/Ajax-con-Vue-Resource'

				]
      },
			{
				title: 'Desafio # 5',
				children: [
					'/desafio5/Vue-Router-Essentials',
					'/desafio5/Active-Links',
          '/desafio5/Programmatic-Navigation',
          '/desafio5/Dynamic-Routes',
          '/desafio5/Reacting-to-routes'
				]
      }
		]
  }
}