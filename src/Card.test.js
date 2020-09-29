
import React from 'react'
import ReactDOM from 'react-dom'
import Card from './Card';
import renderer from 'react-test-renderer'
import STORE from './STORE'

it('Checks Card', () => {

    const div = document.createElement('div')
    ReactDOM.render(<Card
        title='DisProp'
        content='DatProp' />, div)
    ReactDOM.unmountComponentAtNode(div)

})

it('Does Card work', () => {

    let tree = renderer.create(Card(STORE)).toJSON()
    expect(tree).toMatchSnapshot()

})
