import 'babel-polyfill';
import './testPolyfills';
import Enzyme, {shallow, render, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Configure adapter for React 16
Enzyme.configure({ adapter: new Adapter() });

// Make Enzyme function global
global.shallow = shallow;
global.render = render;
global.mount = mount;
