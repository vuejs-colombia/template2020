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
				title: 'Primer Desafio',
				children: [
					'/desafios/desafio-1/vue-cli',
					'/desafios/desafio-1/HMR',
					'/desafios/desafio-1/vue-dev-tools',
					'/desafios/desafio-1/transitions',
					'/desafios/desafio-1/filters'
				]
			},
			{
				title: 'Segundo Desafio',
				children: [
					'/desafios/desafio-2/Custom-Directives',
					'/desafios/desafio-2/Slots',
					'/desafios/desafio-2/Mixins'
				]
			},
			{
				title: 'Tercer Desafio',
				children: [
					'/desafios/desafio-3/Lifecycle-Hooks',
					'/desafios/desafio-3/Ajax-con-Axios'
				]
			},
			{
				title: 'Cuarto Desafio',
				children: [
					'/desafios/desafio-4/Custom-Events',
					'/desafios/desafio-4/Dynamic-Components',
					'/desafios/desafio-4/Custom-Input-Components',
					'/desafios/desafio-4/Ajax-con-Vue-Resource'
				]
			},
			{
				title: 'Quinto Desafio',
				children: [
					'/desafios/desafio-5/Vue-Router-Essentials',
					'/desafios/desafio-5/Active-Links',
					'/desafios/desafio-5/Programmatic-Navigation',
					'/desafios/desafio-5/Dynamic-Routes',
					'/desafios/desafio-5/Reacting-to-routes'
				]
			}
		]
	}
}
