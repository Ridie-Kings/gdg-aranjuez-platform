
export default function buttons({
    text,
    color,
    width,
    height,
    onClick,
    font
}: {
    text: string,
    color?: string,
    width?: string,
    height?: string,
    onClick?: () => void,
    font?: boolean
}) {

    return (
        <button type="submit" onClick={onClick} style={{ color, width, height, fontFamily: font ? "Creepster" : "" }} className="rounded w-full h-full bg-customOrange">
            {text}
        </button>
    );
}

