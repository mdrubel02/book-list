const allTextValue=(id)=>{
    const inputFild=document.getElementById(id);
    const textFild=inputFild.value;
    inputFild.value='';
    return textFild;
};

const book=document.getElementById('book');
book.addEventListener('click', ()=>{
    console.log('clciked')
    // allTextValue('title');
    allTextValue('subject');
    allTextValue('year');
})