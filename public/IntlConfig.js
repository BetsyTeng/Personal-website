
import {addLocaleData} from 'react-intl';
import zh from 'react-intl/locale-data/zh';
import en from 'react-intl/locale-data/en';

import zh_CN from './language/zh_cn';
import en_US from './language/en_US';
addLocaleData([...en, ...zh]);
const IntlConfig = ()=> {
    const getLanguage = ()=>{
        return navigator.language || navigator.browserLanguage;
    }
    const language = getLanguage();
    const chooseLocale=()=>{
            let messages = en_US;
            switch (language.split('-')[0]) {
                case 'en':
                    messages = en_US
                    break;
                case 'zh':
                    messages = zh_CN
                    break;
                default:
                    messages = en_US
                    break;
            }
            return messages;
    };

    return {
        locale:language,
        messages:chooseLocale()
    };
}

const intlConfig = IntlConfig();
export default intlConfig;