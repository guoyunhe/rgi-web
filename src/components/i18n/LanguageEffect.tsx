import axios from 'axios';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageEffect() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // sync html lang attribute
    document.documentElement.setAttribute('lang', i18n.language.toLowerCase());
    axios.defaults.headers['X-Language'] = i18n.language;
  }, [i18n.language]);

  return null;
}
