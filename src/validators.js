import { NAV_ITEMS, HOURS_IN_DAY, MIDNIGHT_HOUR } from './constans'

export function isPageValid(page) {
    return Object.keys(NAV_ITEMS).includes(page)
}

export function validateTimelineItems(timelineItems) {
    return timelineItems.every(isTimelineItemValid)
}

export function isTimelineItemValid({ hour }) {
    return isHourValid(hour)
}

export function validateSelectOptions(options) {
    return options.every(isSelectOptionValid)
}

function isSelectOptionValid({ value, label }) {
    return isNumber(value) && isString(label)
}

export function isUndefinedOrNull(value) {
    return isUndefined(value) || isNull(value)
}

export function isNumberOrNull(value) {
    return isNumber(value) || isNull(value)
}

export function isHourValid(hour) {
    return isNumber(hour) && isBetween(hour, MIDNIGHT_HOUR, HOURS_IN_DAY - 1)
}

function isBetween(value, start, end) {
    return value >= start && value <= end
}

function isNumber(value) {
    return typeof value === 'number'
}

function isString(value) {
    return typeof value === 'string'
}

function isUndefined(value) {
    return value === undefined
}

function isNull(value) {
    return value === null
}
