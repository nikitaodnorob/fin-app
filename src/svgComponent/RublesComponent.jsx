import * as React from "react"
import Svg, { Path } from "react-native-svg"

function RublesComponent(props) {
    return (
        <Svg width={42} height={42} viewBox="0 0 32 32" fill="none" {...props}>
            <Path
                d="M12 24a1 1 0 102 0v-2h5a1 1 0 100-2h-5v-2h4.5c2.757 0 5-2.243 5-5s-2.243-5-5-5H13a1 1 0 00-1 1v7h-2a1 1 0 100 2h2v2h-2a1 1 0 100 2h2v2zm2-14h4.5c1.654 0 3 1.346 3 3s-1.346 3-3 3H14v-6z"
                fill="#000"
                fillOpacity={0.38}
            />
        </Svg>
    )
}

export default RublesComponent
