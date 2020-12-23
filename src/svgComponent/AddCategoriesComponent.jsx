import * as React from "react"
import Svg, { Path } from "react-native-svg"

function AddCategoriesComponent(props) {
    return (
        <Svg width={48} height={48} viewBox="0 0 40 40" fill="none" {...props}>
            <Path
                d="M27 19h-6v-6h-2v6h-6v2h6v6h2v-6h6v-2z"
                fill="#000"
                fillOpacity={0.85}
            />
        </Svg>
    )
}

export default AddCategoriesComponent
