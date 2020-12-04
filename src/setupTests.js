// import '@testing-library/jest-dom/extend-expect';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createSerializer } from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));
/************************************
 *
 const apiKey = 'irpbY8APMlGjv0zXNFjdWqDFsvoCiruB';
 const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

 * ************************************/