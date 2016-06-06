import { getCurrentItem, getItem } from './item'
import { isWeb } from './device'

function appendContextToUrl(url) {
	if (isWeb() && !!sessionStorage['viewerInteractiveContext']) {
		var interactiveContext = JSON.parse(sessionStorage['viewerInteractiveContext'])
		if (interactiveContext.type === 'collection') {
			url += '?collection=' + interactiveContext.id
		}
		if (interactiveContext.type === 'search') {
			url += '?term=' + interactiveContext.term
		}
	}
	return url
}

export function close() {
	var url = '/interactive-redirect/v5/items/__self__/back'
	url = appendContextToUrl(url);
	window.location.href = url
}

export function next() {
	var url = '/interactive-redirect/v5/items/__self__/next'
	url = appendContextToUrl(url)
	window.location.href = url
}

export function previous() {
	var url = '/interactive-redirect/v5/items/__self__/previous'
	url = appendContextToUrl(url)
	window.location.href = '/interactive-redirect/v5/items/__self__/previous'
}

export function openItem(id, bookmark) {
	getItem(id).then(item => {
		var params = {}
		var url = item.url
		if (isWeb()) {
			params['returnurl'] = window.location.href
		}
		if (bookmark) {
			params['bookmark'] = bookmark
		}
		url += '&' + $.param(params)
		
		window.location.href = `${window.location.protocol}//${window.location.host}${url}`
	})
}

export var open = openItem

export function openFolder(id) {
	getItem(id).then(item => {
		window.location.href = item.url
	})
}

export function goto() {
	console.error('goto method is now deprecated. Please use openItem going forward.')
}

export function browse() {
	console.error('browse method is now deprecated. Please use openItem going forward.')
}
