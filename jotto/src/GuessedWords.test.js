import React from 'react';
import { shallow } from 'enzyme';

import { checkProps, findByTestAttr} from '../test/testUtils';

import GuessedWords from './GuessedWords';

const defaultProps = {
    guessedWords: [{ guessedWord: 'test', letterMatchCount: 3}]
};

const setup = (props = {}) => shallow(<GuessedWords {...defaultProps} {...props} />);

test('does not throw error with unexpected props', () => {
    const propWarning = checkProps(GuessedWords, defaultProps);
    expect(propWarning).toBeUndefined()
});

test('throws error with unexpected props', () => {
    const propWarning = checkProps(GuessedWords, {});
    expect(propWarning).toBeDefined()
});

describe('if there are no words guessed', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup({ guessedWords: [ ]});
    });

    test('renders withour error', () => {
        const component = findByTestAttr(wrapper, 'component-guessed-words');
        expect(component.length).toBe(1);
    })

    test('renders intructions to guess a word', () => {
        const instructions = findByTestAttr(wrapper, 'guess-instructions');
        expect(instructions.text().length).not.toBe(0);
    })
})