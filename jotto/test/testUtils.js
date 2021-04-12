import checkPropTypes from 'check-prop-types';

export const findByTestAttr = (wrapper, attribute) => wrapper.find(`[data-test-id="${attribute}"]`);

export const checkProps = (component, conformingProps) => checkPropTypes(
    component.propTypes,
    conformingProps,
    'props',
    component.name
);