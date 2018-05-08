// import axios from 'axios';

const _url = '/product/list';
const getCartInfo = () => {
    // return axios.get(_url)
}

const ajaxGetCartInfo = (url) => {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", url, true);
    xmlhttp.send(null);
    xmlhttp.onreadystatechange = state_Change;

    function state_Change() {
        if (xmlhttp.readyState == 4) {// 4 = "loaded"
            if (xmlhttp.status == 200) {// 200 = OK
                // ...our code here...
                console.log('map',xmlhttp.responseText);
            }
            else {
                // alert("Problem retrieving XML data");
                console.log("Problem retrieving XML data");                
            }
        }
    }
}


export default getCartInfo