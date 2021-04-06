import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() })

describe('App component', () => {
  it('renders App without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders without error', () => {
    const wrapper = shallow(<App />);
    const appComponent = wrapper.find("[data-test-id='component-app']");
    expect(appComponent.length).toBe(1);
  });
  
  it('renders counter display', () => {
    const wrapper = shallow(<App />);
    const counterDisplay = wrapper.find("[data-test-id='counter-display']");
    expect(counterDisplay.length).toBe(1);
  });
  
  it('renders increment button', () => {
    const wrapper = shallow(<App />);
    const incrementButton = wrapper.find("[data-test-id='increment-button']");
    expect(incrementButton.length).toBe(1);
  });
  
  it('renders decrement button', () => {
    const wrapper = shallow(<App />);
    const decrementButton = wrapper.find("[data-test-id='decrement-button']");
    expect(decrementButton.length).toBe(1);
  });
  
  it('renders reset button', () => {
    const wrapper = shallow(<App />);
    const resetButton = wrapper.find("[data-test-id='reset-button']");
    expect(resetButton.length).toBe(1);
  });
  
  it('clicking increment button increments counter', () => {
    throw Error('test not implemented yet');
  });
  
  it('clicking decrement button decrements counter', () => {
    throw Error('test not implemented yet');
  });
  
  it('clicking reset button resets counter', () => {
    throw Error('test not implemented yet');
  });
});