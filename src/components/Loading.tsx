import { CircleNotch, X } from "phosphor-react"


export function Loading() {
    return (
        <div>
            <CircleNotch className='w-6 h-6 animate-spin' weight='bold' />
        </div>
    )
}