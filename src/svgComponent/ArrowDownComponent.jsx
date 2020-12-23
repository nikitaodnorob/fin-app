import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ArrowDownComponent(props) {
    return (
        <Svg width={42} height={42} viewBox="0 0 32 32" fill="none" {...props}>
            <Path
                d="M20.293 13.293L16 17.586l-4.293-4.293-1.414 1.414L16 20.414l5.707-5.707-1.414-1.414z"
                fill="#000"
                fillOpacity={0.38}
            />
        </Svg>
    )
}

export default ArrowDownComponent
