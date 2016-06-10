import { get, post, showUI } from './internalMethods'

export function showSettings(x, y, width, height) {
	return showUI('app-settings', x, y, width, height)
}

export function showUserManagement(x, y, width, height) {
	return showUI('user-management', x, y, width, height)
}

export function showSecondScreenOptions() {
	return post('control/show-ui', { ui: 'second-screen'})
}

export function emailFile(dataUrl) {
	return post('control/email', { dataUrl })
}

export function email(id) {
	return post('control/email', { id })
}

export function showAnnotations() {
	return post('control/show-ui', { ui: 'annotations' })
}

export function takeAndEmailScreenshot() {
	return post('control/email-screenshot')
}