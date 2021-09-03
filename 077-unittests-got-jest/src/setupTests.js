import {configure} from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
require('jest-extended');

configure({adapter: new Adapter()});

const config = {
    "jest": {
        "setupTestFrameworkScriptFile": "jest-extended"
      }
}

export default config;