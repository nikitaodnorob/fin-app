import * as React from "react"
import Svg, { Path } from "react-native-svg"

function AlfaComponent(props) {
    return (
        <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
            <Path
                d="M5.6 27.624h21.032V32H5.6v-4.376zm6.256-10.328h8.296l1.4 4.4h4.6L19.944 3.2c-.6-1.776-1.296-3.2-3.672-3.2-2.376 0-3.104 1.4-3.728 3.2L6.048 21.688h4.312l1.496-4.392zM16.064 4.8h.104l2.792 8.8h-5.84l2.944-8.8z"
                fill="#EF3124"
            />
        </Svg>
    )
}

export default AlfaComponent
