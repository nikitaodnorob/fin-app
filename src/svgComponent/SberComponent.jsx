import * as React from "react"
import Svg, {
    G,
    Path,
    Defs,
    LinearGradient,
    Stop,
    ClipPath
} from "react-native-svg"

function SberComponent(props) {
    return (
        <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
            <G clipPath="url(#clip0)">
                <Path
                    d="M28.64 6.24c.72.96 1.36 2.08 1.92 3.2L16 20.16l-6.08-3.84v-4.56L16 15.6c0-.08 12.64-9.36 12.64-9.36zm3.12 6.88l-3.44 2.56V16c0 3.6-1.52 6.8-4 9.12l2.48 2.8c3.2-2.96 5.28-7.12 5.28-11.84-.08-1.04-.16-2-.32-2.96z"
                    fill="#21A038"
                />
                <Path
                    d="M24.72 24.72c-2.24 2.24-5.28 3.6-8.72 3.6h-.64L15.2 32c.32 0 .56.08.88.08 4.48 0 8.48-1.84 11.36-4.72l-2.72-2.64z"
                    fill="url(#paint0_linear)"
                />
                <Path
                    d="M16 28.32c-3.6 0-6.88-1.6-9.12-4.08l-2.72 2.48C7.04 29.92 11.28 32 16 32v-3.68z"
                    fill="url(#paint1_linear)"
                />
                <Path
                    d="M7.28 24.72c-2.24-2.24-3.6-5.28-3.6-8.72v-.72L0 15.12V16c0 4.4 1.76 8.4 4.64 11.28l2.64-2.56z"
                    fill="url(#paint2_linear)"
                />
                <Path
                    d="M3.68 16c0-3.6 1.6-6.88 4.08-9.12L5.28 4.16C2 7.12 0 11.28 0 16h3.68z"
                    fill="url(#paint3_linear)"
                />
                <Path
                    d="M7.12 7.52A12.25 12.25 0 0116 3.76h.64L16.88 0H16C11.44 0 7.36 1.92 4.48 4.96l2.64 2.56z"
                    fill="url(#paint4_linear)"
                />
                <Path
                    d="M16 3.68c2.56 0 4.96.8 6.96 2.16l3.12-2.32C23.28 1.36 19.84 0 16 0v3.68z"
                    fill="url(#paint5_linear)"
                />
            </G>
            <Defs>
                <LinearGradient
                    id="paint0_linear"
                    x1={15.6043}
                    y1={30.5313}
                    x2={24.8872}
                    y2={27.22}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset={0.1226} stopColor="#A3CD39" />
                    <Stop offset={0.2846} stopColor="#86C339" />
                    <Stop offset={0.8693} stopColor="#21A038" />
                </LinearGradient>
                <LinearGradient
                    id="paint1_linear"
                    x1={4.53437}
                    y1={26.3936}
                    x2={15.3372}
                    y2={29.6507}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset={0.1324} stopColor="#F2E913" />
                    <Stop offset={0.2977} stopColor="#EBE716" />
                    <Stop offset={0.5306} stopColor="#D9E01F" />
                    <Stop offset={0.8023} stopColor="#BBD62D" />
                    <Stop offset={0.9829} stopColor="#A3CD39" />
                </LinearGradient>
                <LinearGradient
                    id="paint2_linear"
                    x1={4.80768}
                    y1={26.4925}
                    x2={2.582}
                    y2={16.4496}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset={0.1444} stopColor="#F2E913" />
                    <Stop offset={0.3037} stopColor="#E7E518" />
                    <Stop offset={0.5823} stopColor="#CADB26" />
                    <Stop offset={0.891} stopColor="#A3CD39" />
                </LinearGradient>
                <LinearGradient
                    id="paint3_linear"
                    x1={2.05192}
                    y1={16.9115}
                    x2={5.2548}
                    y2={5.40295}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset={0.0698} stopColor="#A3CD39" />
                    <Stop offset={0.2599} stopColor="#81C55F" />
                    <Stop offset={0.9216} stopColor="#0FA8E0" />
                </LinearGradient>
                <LinearGradient
                    id="paint4_linear"
                    x1={5.0095}
                    y1={4.98728}
                    x2={16.4095}
                    y2={2.49016}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset={0.0592} stopColor="#0FA8E0" />
                    <Stop offset={0.5385} stopColor="#0099F9" />
                    <Stop offset={0.9234} stopColor="#0291EB" />
                </LinearGradient>
                <LinearGradient
                    id="paint5_linear"
                    x1={15.1023}
                    y1={1.86728}
                    x2={25.7423}
                    y2={4.03872}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset={0.0566} stopColor="#0291EB" />
                    <Stop offset={0.79} stopColor="#0C8ACB" />
                </LinearGradient>
                <ClipPath id="clip0">
                    <Path fill="#fff" d="M0 0H32V32H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default SberComponent
