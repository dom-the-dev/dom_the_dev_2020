import React from 'react';
import PropTypes from 'prop-types';

const SkillIcon = props => {
    return (
        <div className={"dom-skillIcon"}>
            {props.children}
        </div>
    );
};

SkillIcon.propTypes = {
    children: PropTypes.any
};

export default SkillIcon;