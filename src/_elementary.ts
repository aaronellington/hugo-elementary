import Pylon from '@kyberbits/pylon'
import './styles.scss'

Pylon.action([
	{
		selector: 'article img',
		func: (img: HTMLImageElement) => {
			const link = document.createElement('a')
			link.href = img.src
			link.target = '_blank'
			link.innerHTML = img.outerHTML
			img.replaceWith(link)
		},
	},
])
