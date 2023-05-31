let searchMenu = document.querySelector('#search-menu');
let btnSearchMenu = document.querySelector('#pesquisar-menu');

btnSearchMenu.addEventListener('click', listSearch);

let postListMenu = document.querySelector('.post-area').cloneNode(true);

function listSearch() {

    document.querySelector('.post-area').innerHTML = "";

    if (searchMenu.value == '') {

        document.querySelector('.post-area').append(postListMenu);

    } else {
        dataPosts.filter((item) => {
            if ((item.title.toLocaleLowerCase()).includes((searchMenu.value.toLocaleLowerCase())) || (item.desc.toLocaleLowerCase()).includes((searchMenu.value.toLocaleLowerCase()))) {
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

searchMenu.addEventListener('input', listSearch);