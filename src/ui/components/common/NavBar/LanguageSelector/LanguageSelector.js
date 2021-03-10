import React, { useContext, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../../../store/actions/index';
import LocaleContext from '../../../../../utils/context/localeContext';

import './LanguageSelector.scss';

const LanguageSelector = ({ toggleLanguage }) => {
    const selectRef = useRef();
    const selectedLanguage = useContext(LocaleContext);
    useEffect(() => console.log(selectedLanguage), [selectedLanguage]);
    return (
        <div className='language-selector'>
            <select
                value={selectedLanguage}
                ref={selectRef}
                onChange={() => toggleLanguage(selectRef?.current?.value)}
            >
                <option key='EN' value='EN'>{`🇺🇸 EN`}</option>
                <option key='RU' value='RU'>{`🇷🇺 RU`}</option>
            </select>
        </div>
    );
};

const dispatchStateToProps = dispatch => {
    return {
        toggleLanguage: langCode =>
            dispatch(actions.toggleSelectedLanguage(langCode)),
    };
};

export default connect(null, dispatchStateToProps)(LanguageSelector);
