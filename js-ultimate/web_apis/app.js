const loadFromLocalStorage = (one = false) => {
    const dataText = localStorage.getItem('userHappyNumbers');
    if (dataText !== null) {
        const data = JSON.parse(dataText);
        return one ? [data[data.length - 1]] : data
    }

    return []
};

const saveToLocalStorage = (data) => {
    if (!Array.isArray(data)) {
        data = [...loadFromLocalStorage(), data]
    }
    localStorage.setItem('userHappyNumbers', JSON.stringify(data))
}

const showResult = (resultRef) => {
    resultRef.innerText = loadFromLocalStorage(true);
}

const deleteFromLocalStorage = (one = false) => {
    saveToLocalStorage(loadFromLocalStorage().slice(0, -1));
}


const createTag = ({ tagName = 'div', tagAttrs, tagText, tagId, tagEvt, tagClass } = {}) => {
    const node = document.createElement(tagName);

    if (tagAttrs !== undefined) {
        tagAttrs.forEach(({ name, value }) => {
            node.setAttribute(name, value)
        });
    }

    if (tagClass !== undefined) {
        tagClass.forEach((name) => {
            node.classList.add(name);
        })
    }

    if (tagText !== undefined) {
        const nodeText = document.createTextNode(tagText);
        node.appendChild(nodeText)
    }

    if (tagId !== undefined) {
        node.id = tagId;
    }

    if (tagEvt !== undefined) {
        tagEvt.forEach(({ type, cb }) => {
            node.addEventListener(type, cb)
        })
    }

    return node;

}

const handleSave = (event, inputRef, resultRef) => {
    if (inputRef.value !== '') {
        saveToLocalStorage(inputRef.value);
        inputRef.value = '';
        showResult(resultRef)
    }
}

const handleDelete = (event, resultRef) => {
    deleteFromLocalStorage();
    showResult(resultRef);
}

const labelRef = createTag({
    tagName: 'label',
    tagAttrs: [
        {
            name: 'for',
            value: 'happy'
        }
    ],
    tagText: 'Szczęśliwy numer'
})

const inputRef = createTag({
    tagName: 'input',
    tagAttrs: [
        { name: 'type', value: 'text' },
        { name: 'name', value: 'userNumber' },
    ],
    tagId: 'happy'
})

const h2Ref = createTag({
    tagName: 'h2',
    tagId: 'happyNumber',
    tagText: loadFromLocalStorage(true)
})

const btnSaveRef = createTag({
    tagName: 'button',
    tagText: 'Save',
    tagEvt: [
        {
            type: 'click',
            cb: (evt) => {
                handleSave(evt, inputRef, h2Ref)
            }
        }
    ]
})

const btnDeletRef = createTag({
    tagName: 'button',
    tagText: 'Delete',
    tagEvt: [
        {
            type: 'click',
            cb: (evt) => {
                handleDelete(evt, h2Ref)
            }
        }
    ]
})




document.body.appendChild(labelRef)
document.body.appendChild(inputRef)
document.body.appendChild(btnSaveRef)
document.body.appendChild(btnDeletRef)
document.body.appendChild(h2Ref)
