let search = document.querySelector('#search');
let btnSearch = document.querySelector('#pesquisar');

btnSearch.addEventListener('click', listSearch);

let postList = document.querySelector('.post-area').cloneNode(true);

function listSearch() {
    
    document.querySelector('.post-area').innerHTML = "";

    if (search.value == '') {

        document.querySelector('.post-area').append(postList);

    } else {
        dataPosts.filter((item) => {
            if ((item.title.toLocaleLowerCase()).includes((search.value.toLocaleLowerCase())) || (item.desc.toLocaleLowerCase()).includes((search.value.toLocaleLowerCase()))) {
                let postItem = document.querySelector('.models .post-item').cloneNode(true);

                postItem.querySelector('#title').innerHTML = item.title;
                postItem.querySelector('#desc').innerHTML = item.desc;
                postItem.querySelector('a').href = item.link;
                postItem.querySelector('img').src = item.img;
                postItem.querySelector('img').alt = item.title;

                document.querySelector('.post-area').append(postItem);
            }

        });
    }



};

search.addEventListener('input', listSearch);