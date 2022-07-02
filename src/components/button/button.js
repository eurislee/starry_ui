import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './button.styl';

const types = {
  primary: 'primary',
  default: 'default',
  warning: 'warning',
  success: 'success',
  error: 'error',
  info: 'info',
  disabled: 'disabled',
};

const sizes = {
  small: 'small',
  default: 'default',
  large: 'large',
};

export default function Button(props) {
  const {
    loading,
    disabled,
    flex,
    prefixClass,
    children,
    type,
    className,
    htmlType,
    onClick,
    hollow,
    size,
    href,
    dashed,
    circle,
    plain,
    ...attr
  } = props;

  const checkType = btnType => {
    return type.indexOf(btnType) !== -1;
  };

  const isDisabled = checkType('disabled') ? {disabled: true} : {};

  const baseProps = {
    ...attr,
    ...isDisabled,
    type: htmlType,
    className: classNames(prefixClass, className, {
      [`${prefixClass}-${type}`]: type,
      [`${prefixClass}-default`]: !disabled && type === types.default,
      [`${prefixClass}-normal`]: type === types.default,
      [`${prefixClass}-disabled`]: disabled,
      [`${prefixClass}-loading`]: loading,
      [`${prefixClass}-flex`]: flex,
      [`${prefixClass}-hollow`]: hollow,
      [`${prefixClass}-size-${size}`]: size !== sizes.default,
      [`${prefixClass}-dashed`]: dashed,
      [`${prefixClass}-circle`]: circle,
      [`${prefixClass}-plain`]: plain,
    })
  };

  const content = (
      <>
        {loading && !circle }
        <span>{children}</span>
      </>
  );

  if(href) {
    return (
        <a href={disabled ? "javascript:void(0);" : href}
        disabled={disabled}
        className={classNames(`${prefixClass}-link`, className, {
          [`${prefixClass}-link-disabled`]: disabled
        })}
           {...attr}
        >
          {content}
        </a>
    )
  }
    return (
      <button {...baseProps}>{content}</button>
  );
};

Button.defaultProps = {
  prefixClass: 'starry-button',
  href: '',
  type: types.default,
  htmlType: 'button',
  size: sizes.default,
  loading: false,
  flex: false,
  disabled: false,
  hollow: false,
  dashed: false,
  circle: false,
  plain: false,
};

Button.propTypes = {
  prefixClass: PropTypes.string.isRequired,
  flex: PropTypes.bool,
  hollow: PropTypes.bool,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  dashed: PropTypes.bool,
  circle: PropTypes.bool,
  plain: PropTypes.bool,
  htmlType: PropTypes.string,
  href: PropTypes.string,
  type: PropTypes.oneOf(Object.values(types)),
  size: PropTypes.oneOf(Object.values(sizes)),
};