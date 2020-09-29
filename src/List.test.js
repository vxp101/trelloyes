import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import List from './List'

it('Check if list works', () => {

    const div = document.createElement('div');
    ReactDOM.render((<List
        id={1}
        headers='HeadsBanging'
        cards={[]} />), div);
    ReactDOM.unmountComponentAtNode(div);

})

it('Check if snapshot list works', () => {

    const tree = renderer.create(<List
        id={1}
        headers='HeadsBanging'
        cards={[]} />).toJSON()
    expect(tree).toMatchSnapshot()

})
