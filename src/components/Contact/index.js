import React from 'react'

const Contact = () => {
    function handleParentClick(e) {
        console.log('parent');
    }

    function handleChildClick(e) {
        e.stopPropagation();
        console.log('child');
    }

    return (
        <div>
            <div onClick={handleParentClick}>
                <div onClick={(e) => handleChildClick(e)}>Child-Click</div>
            </div>
        </div>
    )
}

export default Contact