import * as React from "react"
import Svg, { Path } from "react-native-svg"

function DebitComponent(props) {
    return (
        <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
            <Path
                d="M10.667 26.667a1.333 1.333 0 102.666 0V24H20a1.333 1.333 0 100-2.667h-6.667v-2.666h6A6.674 6.674 0 0026 12a6.674 6.674 0 00-6.667-6.667H12c-.737 0-1.333.598-1.333 1.334V16H8a1.333 1.333 0 000 2.667h2.667v2.666H8A1.333 1.333 0 108 24h2.667v2.667zM13.333 8h6c2.206 0 4 1.795 4 4s-1.794 4-4 4h-6V8z"
                fill="#FF5B5B"
            />
        </Svg>
    )
}

export default DebitComponent
