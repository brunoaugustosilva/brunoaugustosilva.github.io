import Life from '../data/Life.json';
import Languages from '../data/Languages.json';

export function getLifeById(id = 1){
    return Life.filter(item => item.id === id).map(item => ({
        id: item.id,
        title: item.title,
        acronymous: item.acronymous,
        description: item.description,
        content: item.content,
    }));
}

export function getLanguageById(id = 1){
    return Languages.filter(lang => lang.id === id).map(lang => ({
        id: lang.id,
        title: lang.title,
        description: lang.description,
        content: lang.content
    }));
}


export default function getData(id, value = 'Life') {
    return value === 'Life' ? getLifeById(id) : getLanguageById(id);
}