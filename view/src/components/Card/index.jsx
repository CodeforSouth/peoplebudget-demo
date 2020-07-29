import React from 'react';

const Card = ({
    children,
    radius = '2em',
    width = 'fit-content',
    height = 'fit-content',
    sidePadding = '0',
    centerPadding = '0',
    top = '0',
    bottom = '0',
    left = '0',
    right = '0',
    shadow,
    border,
    customClassName
}) => {
    return (
        <div
            className={`p-1 ${shadow ? 'shadow' : ''}
             ${border ? 'border' : ''} ${customClassName ? customClassName : ''}`}
            style={{
                backgroundColor: 'white',
                borderRadius: radius,
                width: width,
                height: height,
                paddingLeft: sidePadding,
                paddingRight: sidePadding,
                paddingTop: centerPadding,
                paddingBottom: centerPadding,
                top: top,
                bottom: bottom,
                left: left,
                right: right
            }}
        >
            {children}
        </div>
    );
};

export default Card;
