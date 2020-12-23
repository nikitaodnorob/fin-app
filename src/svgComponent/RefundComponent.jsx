import * as React from "react"
import Svg, { Path } from "react-native-svg"

function RefundComponent(props) {
    return (
        <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
            <Path
                d="M12.65 15.35a.4.4 0 00-.282-.683h-2.9l.001-.012a6.607 6.607 0 011.003-2.383c.237-.352.512-.684.813-.987a6.737 6.737 0 012.12-1.428c.403-.17.823-.301 1.251-.388.877-.18 1.81-.18 2.69 0a6.637 6.637 0 012.873 1.367c.285.233.706.237.967-.023l.944-.942a.63.63 0 00-.015-.924A9.336 9.336 0 0019.636 7.4a9.23 9.23 0 00-1.753-.544 9.438 9.438 0 00-3.759 0 9.253 9.253 0 00-1.755.545 9.388 9.388 0 00-4.107 3.379 9.304 9.304 0 00-1.405 3.34c-.037.18-.057.364-.084.547h-3.14a.4.4 0 00-.284.683l4.368 4.367a.4.4 0 00.566 0l4.367-4.367zm6.7 1.3a.4.4 0 00.282.683h2.9l-.001.011a6.63 6.63 0 01-1.819 3.37 6.73 6.73 0 01-2.117 1.429c-.404.17-.824.301-1.251.388-.876.18-1.81.18-2.69 0a6.614 6.614 0 01-2.875-1.37c-.285-.233-.704-.236-.964.024l-.944.944a.631.631 0 00.017.925 9.327 9.327 0 004.232 2.09 9.429 9.429 0 003.757 0 9.166 9.166 0 001.756-.545 9.374 9.374 0 004.104-3.382 9.294 9.294 0 001.404-3.337c.036-.18.058-.364.084-.547h3.143a.4.4 0 00.283-.682l-4.368-4.368a.4.4 0 00-.566 0L19.35 16.65z"
                fill="#000"
                fillOpacity={0.38}
            />
        </Svg>
    )
}

export default RefundComponent
