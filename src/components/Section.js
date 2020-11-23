import React from "react"
import PropTypes from "prop-types"
import SectionHeadline from "./SectionHeadline"

const Section = props => {
    return (
        <section
            id={`dom-${props.id}`}
            className={`dom-section dom-${props.id}`}
        >
            <div className={`dom-section__content dom-${props.id}__content`}>
                {props.inContainer ? (
                    <div className="container">
                        {props.showHeadline
                            ? props.title && (
                                  <div className="row">
                                      <div className="col-12">
                                          <SectionHeadline
                                              title={props.title}
                                              subline={props.subline}
                                          />
                                      </div>
                                  </div>
                              )
                            : null}
                        <div
                            className={
                                props.center
                                    ? "row justify-content-center"
                                    : "row"
                            }
                        >
                            {props.children}
                        </div>
                    </div>
                ) : (
                    props.children
                )}
            </div>
        </section>
    )
}

Section.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    subline: PropTypes.string,
    children: PropTypes.any,
    showHeadline: PropTypes.bool,
    center: PropTypes.bool,
    inContainer: PropTypes.bool,
}

Section.defaultProps = {
    center: true,
    inContainer: true,
    marginTop: 0,
    marginBottom: 0,
}

export default Section
