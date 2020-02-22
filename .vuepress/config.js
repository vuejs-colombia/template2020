module.exports = {
  base: '/template2020/',
  dest: 'docs',
  title: 'Vue.js Colombia',
  description: ' ',
  themeConfig: {
    nav: [
      { text:'Bienvenid@', link: '/bienvenid@/' },
      { text:'Instalacion', link: '/instalacion/' },
      { text:'Desafios', link: '/desafios/' },
      { text:'GitHub', link: 'https://github.com/vuejs-colombia' }
    ],
		sidebar: [
			'/desafios/',
			{
				title: 'Desafio # 1',
				children: [
					'/desafios/desafio1/vue-cli',
					'/desafios/desafio1/HMR',
          '/desafios/desafio1/vue-dev-tools',
          '/desafios/desafio1/transitions',
          '/desafios/desafio1/filters'
				]
			},
			{
				title: 'Desafio # 2',
				children: [
					'/desafios/desafio2/Custom-Directives',
					'/desafios/desafio2/Slots',
					'/desafios/desafio2/Mixins'
				]
      },
			{
				title: 'Desafio # 3',
				children: [
					'/desafios/desafio3/Lifecycle-Hooks',
					'/desafios/desafio3/Ajax-con-Axios'				]
      },
			{
				title: 'Desafio # 4',
				children: [
					'/desafios/desafio4/Custom-Events',
					'/desafios/desafio4/Dynamic-Components',
          '/desafios/desafio4/Custom-Input-Components',
					'/desafios/desafio4/Ajax-con-Vue-Resource'

				]
      },
			{
				title: 'Desafio # 5',
				children: [
					'/desafios/desafio5/Vue-Router-Essentials',
					'/desafios/desafio5/Active-Links',
          '/desafios/desafio5/Programmatic-Navigation',
          '/desafios/desafio5/Dynamic-Routes',
          '/desafios/desafio5/Reacting-to-routes'
				]
      }
		]
  }
}
