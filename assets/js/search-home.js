let search = document.querySelector('#search');
let btnSearch = document.querySelector('#pesquisar')

dataPages.map((item, index) => {
    let postItem = document.querySelector('.models .post-item').cloneNode(true);

    postItem.querySelector('#title').innerHTML = item.title;
    postItem.querySelector('#desc').innerHTML = item.desc;
    postItem.querySelector('a').href = item.link;

    document.querySelector('.post-area').append(postItem);
});

btnSearch.addEventListener('click', listSearch);


function listSearch() {
    document.querySelector('.post-area').innerHTML = "";

    if (search.value == '') {
        dataPages.map((item, index) => {
            let postItem = document.querySelector('.models .post-item').cloneNode(true);
        
            postItem.querySelector('#title').innerHTML = item.title;
            postItem.querySelector('#desc').innerHTML = item.desc;
            postItem.querySelector('a').href = item.link;
        
            document.querySelector('.post-area').append(postItem);
        });
    } else {
        dataPages.filter((item) => {
            if ((item.title.toLocaleLowerCase()).includes((search.value.toLocaleLowerCase())) || (item.desc.toLocaleLowerCase()).includes((search.value.toLocaleLowerCase()))) {
                let postItem = document.querySelector('.models .post-item').cloneNode(true);
    
                postItem.querySelector('#title').innerHTML = item.title;
                postItem.querySelector('#desc').innerHTML = item.desc;
                postItem.querySelector('a').href = item.link;
    
                document.querySelector('.post-area').append(postItem);
            }
    
        });
    }



};

search.addEventListener('input', listSearch);