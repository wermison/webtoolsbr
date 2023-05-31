dataPosts.filter((item)=> {
    let itemNav = document.querySelector('.nav-model .nav-model-item').cloneNode(true);
    if (item.category == "Calculadoras") {

        itemNav.querySelector('a').innerHTML = item.title;
        itemNav.querySelector('a').href = item.link;

        document.querySelector('.nav-calc').append(itemNav);
    };

    if (item.category == "Geradores") {
        itemNav.querySelector('a').innerHTML = item.title;
        itemNav.querySelector('a').href = item.link;

        document.querySelector('.nav-geradores').append(itemNav);
    };

    if (item.category == "Conversores") {
        itemNav.querySelector('a').innerHTML = item.title;
        itemNav.querySelector('a').href = item.link;

        document.querySelector('.nav-conversores').append(itemNav);
    };

    if (item.category == "Geral") {
        itemNav.querySelector('a').innerHTML = item.title;
        itemNav.querySelector('a').href = item.link;

        document.querySelector('.nav-geral').append(itemNav);
    };
});