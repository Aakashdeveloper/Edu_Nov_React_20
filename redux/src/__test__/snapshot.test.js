import React from 'react';
import {create} from 'react-test-renderer';
import Footer from '../component/Footer';

describe('Functional Testing',() => {
    test('Snapshot Testing',() => {
        let tree = create(<Footer/>);
        expect(tree.toJSON()).toMatchSnapshot()
    })
})