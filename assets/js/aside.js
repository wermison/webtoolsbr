data.filter((item)=> {
    let itemCalc = document.querySelector('.aside-model .aside-model-item').cloneNode(true);
    if (item.category == "Calculadoras") {

        itemCalc.querySelector('a').innerHTML = item.title;
        itemCalc.querySelector('a').href = item.link;

        document.querySelector('.area-calc').append(itemCalc);
    };

    if (item.category == "Geradores") {
        itemCalc.querySelector('a').innerHTML = item.title;
        itemCalc.querySelector('a').href = item.link;

        document.querySelector('.area-geradores').append(itemCalc);
    };

    if (item.category == "Conversores") {
        itemCalc.querySelector('a').innerHTML = item.title;
        itemCalc.querySelector('a').href = item.link;

        document.querySelector('.area-conversores').append(itemCalc);
    };

    if (item.category == "Geral") {
        itemCalc.querySelector('a').innerHTML = item.title;
        itemCalc.querySelector('a').href = item.link;

        document.querySelector('.area-geral').append(itemCalc);
    };
});