let urlUtm = document.querySelector('#url');
let originUtm = document.querySelector('#origin');
let typeUtm = document.querySelector('#type');
let codeUtm = document.querySelector('#code');
let nameUtm = document.querySelector('#name');
let termsUtm = document.querySelector('#terms');
let contentUtm = document.querySelector('#content');
let btnGeneratorUtm = document.querySelector('#generate-btn');
let resultArea = document.querySelector('#result');
let btnCopy = document.querySelector('#btn-copy');
let copyArea = document.querySelector('#copy');
let aviso = document.querySelector('.aviso');
let interval;
let intervalAviso;

// let urlRegex = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ 
let urlRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/

btnGeneratorUtm.addEventListener('click', generate);

function generate() {
    if (!urlRegex.test(urlUtm.value) || originUtm.value == '' || typeUtm.value == '' || nameUtm.value == '') {
        urlValidator();
        originValidator();
        typeValidator();
        nameValidator();
        aviso.style.display = 'flex'
        intervalAviso = setInterval(()=> {
            aviso.style.display = 'none'
            clearInterval(intervalAviso);
        }, 4000)
    } else {
        let formatUrl;

        if (urlUtm.value.startsWith('https://')) {
            formatUrl = urlUtm.value;
            console.log(`${formatUrl} já tinha https`);
        } else if (urlUtm.value.startsWith('http://')) {
            formatUrl = urlUtm.value;
            console.log(`${formatUrl} tinha http`);
        } else {
            formatUrl = `https://${urlUtm.value}`;
            console.log(`${formatUrl} não tinha nada`);
        }

        let newCode = codeUtm.value == '' ? codeUtm.value : `&utm_id=${codeUtm.value}`;
        let newTerms = termsUtm.value == '' ? termsUtm.value : `&utm_term=${termsUtm.value}`;
        let newContent = contentUtm.value == '' ? contentUtm.value : `&utm_content=${contentUtm.value}`;

        let result = `${formatUrl.toLowerCase()}?utm_source=${originUtm.value}&utm_medium=${typeUtm.value}&utm_campaign=${nameUtm.value}${newCode}${newTerms}${newContent}`;

        let newResult = result.replace(/ /g, '+');

        resultArea.value = newResult;

        btnCopy.style.display = 'block'
        copyArea.style.display = 'none'

        
    }
}

function urlValidator() {
    if (!urlRegex.test(urlUtm.value)) {
        urlUtm.style.border = '1px solid #F00'
    } else {
        urlUtm.style.border = '1px solid #CCC'
    }
};

function originValidator() {
    if (originUtm.value == '') {
        originUtm.style.border = '1px solid #F00'
    } else {
        originUtm.style.border = '1px solid #CCC'
    }
};

function typeValidator() {
    if (typeUtm.value == '') {
        typeUtm.style.border = '1px solid #F00'
    } else {
        typeUtm.style.border = '1px solid #CCC'
    }
};

function nameValidator() {
    if (nameUtm.value == '') {
        nameUtm.style.border = '1px solid #F00'
    } else {
        nameUtm.style.border = '1px solid #CCC'
    }
};

btnCopy.addEventListener('click', copyUtm);

        function copyUtm() {
            const textCopy = document.querySelector('#result');
            navigator.clipboard.writeText(textCopy.value);

            copyArea.style.display = 'block'

            interval = setInterval(() => {
                copyArea.style.display = 'none';
                clearInterval(interval);
            }, 4000);
        }