import {toast} from "react-toastify";

const topCenterColored = {
	position: "top-center",
	autoClose: 5000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
	theme: 'coloured'
}

const topCenterDark = {
	position: "top-center",
	autoClose: 5000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
	theme: 'dark'
}

const topCenterLight = {
	position: "top-center",
	autoClose: 5000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
	theme: 'light'
}


export const successColoredTopCenter = (title) => {toast.success(title, topCenterColored)}

export const infoColoredTopCenter = (title) => {toast.info(title, topCenterColored)}

export const warningColoredTopCenter = (title) => {toast.warn(title, topCenterColored)}

export const errorColoredTopCenter = (title) => {toast.error(title, topCenterColored)}

export const defaultTopCenter = (title) => {toast(title, topCenterColored)}

export const successDarkTopCenter = (title) => {toast.success(title, topCenterDark)}

export const infoDarkTopCenter = (title) => {toast.info(title, topCenterDark)}

export const warningDarkTopCenter = (title) => {toast.warn(title, topCenterDark)}

export const errorDarkTopCenter = (title) => {toast.error(title, topCenterDark)}

export const defaultDarkTopCenter = (title) => {toast(title, topCenterDark)}

export const successLightTopCenter = (title) => {toast.success(title, topCenterLight)}

export const infoLightTopCenter = (title) => {toast.info(title, topCenterLight)}

export const warningLightTopCenter = (title) => {toast.warn(title, topCenterLight)}

export const errorLightTopCenter = (title) => {toast.error(title, topCenterLight)}

export const defaultLightTopCenter = (title) => {toast(title, topCenterLight)}