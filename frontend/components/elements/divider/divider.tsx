import React from 'react'

export default function divider({
    color,
    width,
    height
}: {
    color?: string,
    width?: number,
    height?: number,
}) {
    return (
        <div style={{ color, width, height }} className="w-full h-[1px] rounded-lg bg-customOrange"></div>
    )
}
