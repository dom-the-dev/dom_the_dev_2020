import React from "react"
import PropTypes from "prop-types"

const Card = props => {
    return (
        <div className={"dom-card"}>
            {props.children}
        </div>
    )
}

Card.propTypes = {
    marginTop: PropTypes.number,
    children: PropTypes.any,
}

Card.defaultProps = {
    marginTop: 0,
}

export default Card
