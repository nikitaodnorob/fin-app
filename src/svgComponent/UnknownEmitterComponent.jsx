import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

function UnknownEmitterComponent(props) {
    return (
        <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
            <Path
                d="M25.96 6.337v4.72L7.39 7.326a.767.767 0 00-.904.602L6.14 9.652l-.767 3.817-1.434 7.142h-.8a.768.768 0 01-.768-.768V6.337c0-.423.343-.768.767-.768h22.054c.424 0 .768.345.768.768z"
                fill="#303C44"
            />
            <Path
                d="M29.013 11.67a.767.767 0 01.601.903l-.346 1.724h-.001L6.14 9.652l.346-1.723a.767.767 0 01.904-.601l18.57 3.728 3.053.613z"
                fill="#FFC035"
            />
            <Path
                d="M28.5 18.114l.767-3.817h.001l-2.312 11.517a.768.768 0 01-.904.602L4.429 22.073a.767.767 0 01-.602-.904l.112-.558 1.435-7.142L28.5 18.114z"
                fill="#FFC035"
            />
            <Path
                opacity={0.2}
                d="M27.077 25.211l-.121.603a.768.768 0 01-.904.602L4.429 22.073a.767.767 0 01-.602-.904l.112-.558 1.435-7.142.022.005-1.276 6.355-.112.56a.767.767 0 00.601.903l21.624 4.342a.768.768 0 00.844-.423zM29.268 14.297l-.609 3.031.608-3.031h.001z"
                fill="#303C44"
            />
            <Path
                opacity={0.2}
                d="M29.449 13.516l-2.313 11.516a.774.774 0 01-.06.18l1.583-7.884.022.005.767-3.817z"
                fill="#303C44"
            />
            <Path
                d="M29.267 14.297l-.766 3.817-23.127-4.645.766-3.817 23.127 4.645z"
                fill="#526471"
            />
            <Path
                opacity={0.2}
                d="M29.267 14.297l-.766 3.817-23.127-4.645 23.893.828z"
                fill="url(#paint0_linear)"
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear"
                    x1={17.3203}
                    y1={13.4692}
                    x2={17.3203}
                    y2={18.1136}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0} />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}

export default UnknownEmitterComponent
