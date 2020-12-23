import * as React from "react"
import Svg, { G, Rect, Defs, ClipPath, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function CheckerComponent(props) {
    return (
        <Svg width={48} height={24} viewBox="0 0 48 24" fill="none" {...props}>
            <G clipPath="url(#clip0)">
                <Rect width={48} height={24} rx={12} fill="#7957D8" />
                <G filter="url(#filter0_d)">
                    <Rect x={26} y={2} width={20} height={20} rx={10} fill="#fff" />
                </G>
            </G>
            <Defs>
                <ClipPath id="clip0">
                    <Path fill="#fff" d="M0 0H48V24H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default CheckerComponent
