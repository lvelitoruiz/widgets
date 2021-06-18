import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [
    {
        title: 'What is React?',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec varius ante, ut elementum diam. Vivamus eu libero in arcu sagittis tincidunt vitae nec ex. Nulla cursus suscipit odio a scelerisque.'
    },
    {
        title: 'Why use React?',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec varius ante, ut elementum diam. Vivamus eu libero in arcu sagittis tincidunt vitae nec ex. Nulla cursus suscipit odio a scelerisque.'
    },
    {
        title: 'How do you use React?',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec varius ante, ut elementum diam. Vivamus eu libero in arcu sagittis tincidunt vitae nec ex. Nulla cursus suscipit odio a scelerisque.'
    }
]

export default () => {
    return (<div>
        {/* <Accordion items={items} /> */}
        <Search />
    </div>)
};