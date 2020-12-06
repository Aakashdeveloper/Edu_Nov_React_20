import React from 'react';
import {create} from 'react-test-renderer';
import BaseButton from '../component/BaseButton';
import Footer from '../component/Footer';

describe('Functional Testing',() => {
    test('button test',()=>{
        const component = create(<BaseButton/>);
        const instance = component.root;
        const button = instance.findByType("button");
        button.props.onClick();
        expect(button.props.children).toBe("Some Thing else")
    })
    test('Snapshot Testing',() => {
        let tree = create(<Footer/>);
        expect(tree.toJSON()).toMatchSnapshot()
    })
})