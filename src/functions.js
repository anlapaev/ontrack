import { PAGE_TIMELINE, HOURS_IN_DAY, MIDNIGHT_HOUR } from '@/constans'
import { isPageValid } from './validators'

export function normalizePageHash() {
    const page = window.location.hash.slice(1)
    if (isPageValid(page)) {
        return page
    } else {
        window.location.hash = PAGE_TIMELINE
        return PAGE_TIMELINE
    }
}

export function generateTimelineItems() {
    const timelineItems = []
    for (let hour = MIDNIGHT_HOUR; hour < HOURS_IN_DAY; hour++) {
        timelineItems.push({ hour })
    }
    return timelineItems
}
